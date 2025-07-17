import { ReconciliationResult } from '../types';

/**
 * Generates rich sample data for the advanced analytics dashboard
 * This creates realistic, varied data for all visualizations
 */
export function generateSampleAnalyticsData(): ReconciliationResult[] {
  // Create base data structures
  const customers = [
    'Acme Corp', 'Beta Inc', 'Gamma LLC', 'Delta Co', 'Epsilon Partners',
    'Acme Corp West', 'Acme Holdings', 'Beta Subsidiaries', 'Beta International Inc',
    'Gamma Group Holdings', 'Delta Corp', 'Delta Logistics Services'
  ];
  
  const issueTypes = [
    'duplicate_payment', 'missing_invoice', 'amount_mismatch', 
    'missing_ledger_entry', 'payer_name_mismatch'
  ];
  
  const paymentMethods = ['ACH', 'Wire', 'Check', 'Credit Card'];
  
  // Generate dates spanning last 3 months for time series
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 90; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      // Format as YYYY-MM-DD
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };
  
  const dates = generateDates();
  
  // Generate varied sample data for rich visualization
  const results: ReconciliationResult[] = [];
  let paymentIdCounter = 1000;
  let invoiceIdCounter = 2000;
  let ledgerIdCounter = 3000;
  
  // Generate data with appropriate distribution of statuses and issues
  dates.forEach((date, dateIndex) => {
    // Generate more results for recent dates to show trends
    const resultsPerDay = Math.floor(3 + Math.random() * 5 + (dateIndex / dates.length) * 8);
    
    for (let i = 0; i < resultsPerDay; i++) {
      const paymentId = `PAY-${paymentIdCounter++}`;
      const invoiceId = `INV-${invoiceIdCounter++}`;
      const ledgerId = `LED-${ledgerIdCounter++}`;
      
      // Pick a customer, slightly favor earlier ones for recurring patterns
      const customerIndex = Math.floor(
        Math.min(customers.length - 1, 
                Math.abs(Math.floor(Math.random() * customers.length - 2) + 
                         Math.random() * 3))
      );
      const customerName = customers[customerIndex];
      
      // Determine if this will be a problemmatic entry
      // Gradually increase reconciliation quality over time to show improvement trend
      const qualityFactor = 0.5 + (dateIndex / dates.length) * 0.4;
      const willHaveIssues = Math.random() > qualityFactor;
      
      // Generate a realistic invoice amount
      const baseAmount = Math.floor(500 + Math.random() * 4500);
      const invoiceAmount = Math.round(baseAmount * 100) / 100;
      
      // Maybe create variance in payment amount
      let paymentAmount = invoiceAmount;
      if (willHaveIssues && Math.random() > 0.6) {
        if (Math.random() > 0.5) {
          // Underpayment
          paymentAmount = Math.round(invoiceAmount * (0.4 + Math.random() * 0.55) * 100) / 100;
        } else {
          // Overpayment
          paymentAmount = Math.round(invoiceAmount * (1.05 + Math.random() * 0.2) * 100) / 100;
        }
      }
      
      // For some customers, consistently get the name slightly wrong
      let payerName = customerName;
      if ((customerIndex === 1 || customerIndex === 4 || customerIndex === 7) && Math.random() > 0.5) {
        payerName = customerName.replace('Inc', 'Incorporated')
          .replace('LLC', 'Limited')
          .replace('Co', 'Company')
          .replace('Partners', '& Partners');
      }
      
      // Create the payment object
      const payment = {
        payment_id: paymentId,
        payer_name: payerName,
        amount: paymentAmount,
        payment_date: date,
        method: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
        reference_note: Math.random() > 0.15 ? invoiceId : (Math.random() > 0.5 ? '' : 'UNKNOWN')
      };
      
      // Create the associated invoice
      const invoice = {
        invoice_id: invoiceId,
        customer_name: customerName,
        amount_due: invoiceAmount,
        due_date: new Date(date).toISOString().split('T')[0],
        status: Math.random() > 0.8 ? 'Paid' : 'Open'
      };
      
      // Create the ledger entry (may be undefined based on issues)
      const ledgerEntry = !willHaveIssues || Math.random() > 0.3 ? {
        ledger_entry_id: ledgerId,
        invoice_id: invoiceId,
        payment_id: paymentId,
        amount: paymentAmount,
        entry_date: date
      } : undefined;
      
      // Generate issues based on the scenario
      const issues = [];
      
      // Add appropriate issues
      if (willHaveIssues) {
        // Possibility of duplicate payment (relatively rare)
        if (Math.random() > 0.85 && dateIndex > 10) {
          const duplicateDate = dates[dateIndex - Math.floor(Math.random() * 10)];
          issues.push({
            type: 'duplicate_payment',
            duplicatePayment: {
              payment_id: `PAY-${Math.floor(Math.random() * 1000 + 500)}`,
              payer_name: payerName,
              amount: paymentAmount,
              payment_date: duplicateDate,
              method: payment.method,
              reference_note: payment.reference_note
            }
          });
        }
        
        // Missing invoice reference
        if (payment.reference_note === '') {
          issues.push({
            type: 'missing_invoice',
            message: 'Payment has no invoice reference'
          });
        }
        
        // Amount mismatch
        if (Math.abs(paymentAmount - invoiceAmount) > 0.01) {
          issues.push({
            type: 'amount_mismatch',
            invoiceAmount: invoiceAmount,
            paymentAmount: paymentAmount
          });
        }
        
        // Missing ledger entry
        if (!ledgerEntry) {
          issues.push({
            type: 'missing_ledger_entry',
            message: 'No corresponding ledger entry found'
          });
        }
        
        // Payer name mismatch
        if (payerName !== customerName) {
          issues.push({
            type: 'payer_name_mismatch',
            customerName: customerName,
            payerName: payerName
          });
        }
      }
      
      // If we didn't add any issues but should have, add a random one
      if (issues.length === 0 && willHaveIssues) {
        const randomIssueType = issueTypes[Math.floor(Math.random() * issueTypes.length)];
        
        if (randomIssueType === 'missing_invoice') {
          issues.push({
            type: 'missing_invoice',
            message: 'Cannot find matching invoice'
          });
        } else if (randomIssueType === 'missing_ledger_entry') {
          issues.push({
            type: 'missing_ledger_entry',
            message: 'No corresponding ledger entry found'
          });
        } else if (randomIssueType === 'payer_name_mismatch') {
          issues.push({
            type: 'payer_name_mismatch',
            customerName: customerName,
            payerName: customerName + ' Ltd'
          });
        }
      }
      
      // Determine status based on issues
      let status: 'Reconciled' | 'Partially Reconciled' | 'Unreconciled';
      if (issues.length === 0) {
        status = 'Reconciled';
      } else if (issues.some(i => i.type === 'duplicate_payment' || i.type === 'missing_invoice')) {
        status = 'Unreconciled';
      } else {
        status = 'Partially Reconciled';
      }
      
      // Generate a confidence score
      const baseConfidence = status === 'Reconciled' ? 90 : 
                           status === 'Partially Reconciled' ? 70 : 50;
      const confidenceVariance = Math.random() * 20 - 10; // +/- 10
      const confidenceScore = Math.max(0, Math.min(100, baseConfidence + confidenceVariance));
      
      // Add the result to our dataset
      results.push({
        payment,
        matchedInvoice: payment.reference_note !== '' ? invoice : undefined,
        ledgerEntry,
        status,
        issues,
        confidenceScore: Math.round(confidenceScore)
      });
    }
  });
  
  // Add some name variations for entity resolution
  // Create sets of name variations for key customers
  const nameVariations = [
    {
      name: 'Acme Corp',
      variants: ['Acme Corporation', 'Acme Corp.', 'Acme Co', 'Acme Corp West', 'Acme Holdings']
    },
    {
      name: 'Beta Inc',
      variants: ['Beta Incorporated', 'Beta Inc.', 'Beta International Inc', 'Beta Subsidiaries']
    },
    {
      name: 'Gamma LLC',
      variants: ['Gamma Limited', 'Gamma L.L.C.', 'Gamma Group Holdings', 'The Gamma Group']
    },
    {
      name: 'Delta Co',
      variants: ['Delta Company', 'Delta Corporation', 'Delta Corp', 'Delta Logistics Services']
    }
  ];
  
  // Apply these variations to about 20% of the dataset
  results.forEach(result => {
    const variation = nameVariations.find(v => 
      v.name === result.payment.payer_name || v.variants.includes(result.payment.payer_name)
    );
    
    if (variation && Math.random() > 0.8) {
      const randomVariant = variation.variants[Math.floor(Math.random() * variation.variants.length)];
      result.payment.payer_name = randomVariant;
      
      if (!result.issues.some(i => i.type === 'payer_name_mismatch') && result.matchedInvoice) {
        result.issues.push({
          type: 'payer_name_mismatch',
          customerName: result.matchedInvoice.customer_name,
          payerName: randomVariant
        });
        
        // Update status if needed
        if (result.status === 'Reconciled') {
          result.status = 'Partially Reconciled';
          result.confidenceScore = Math.max(60, Math.floor(result.confidenceScore * 0.8));
        }
      }
    }
  });
  
  return results;
}