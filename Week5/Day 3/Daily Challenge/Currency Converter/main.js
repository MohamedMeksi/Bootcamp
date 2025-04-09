
const supportedCurrenciesEndpoint = `https://v6.exchangerate-api.com/v6/e330fb82332dec6015fa3992/latest/USD`;

const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const fromCurrencyIcon = document.getElementById('fromCurrencyIcon');
const toCurrencyIcon = document.getElementById('toCurrencyIcon');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');
const loadingDiv = document.getElementById('loading');

const currencyIcons = {
  USD: 'fa-dollar-sign',
  EUR: 'fa-euro-sign',
  GBP: 'fa-pound-sign',
  ILS: 'fa-shekel-sign',
};

async function loadSupportedCurrencies() {
  try {
    const response = await fetch(supportedCurrenciesEndpoint);
    const data = await response.json();

    if (data.result === "success") {
      const currencies = Object.keys(data.conversion_rates);

      currencies.unshift('USD');

      currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = `${currency} - ${getCurrencyName(currency)}`;
        fromCurrencySelect.appendChild(option.cloneNode(true));
        toCurrencySelect.appendChild(option.cloneNode(true));
      });

      updateCurrencyIcon(fromCurrencySelect.value, fromCurrencyIcon);
      updateCurrencyIcon(toCurrencySelect.value, toCurrencyIcon);
    } else {
      console.error('Erreur lors de la récupération des devises :', data);
      alert('Impossible de charger les devises. Veuillez réessayer.');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des devises :', error);
    alert('Une erreur est survenue. Veuillez vérifier votre connexion internet.');
  }
}

function getCurrencyName(code) {
  const currencyNames = {
    USD: 'United States Dollar',
    EUR: 'Euro',
    GBP: 'British Pound Sterling',
    ILS: 'Israeli New Sheqel',
  };
  return currencyNames[code] || code;
}

function updateCurrencyIcon(currencyCode, iconElement) {
  const iconClass = currencyIcons[currencyCode] || 'fa-question-circle';
  iconElement.className = `fas ${iconClass} currency-icon`;
}

async function convertCurrency() {
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const amount = parseFloat(amountInput.value);

  if (!fromCurrency || !toCurrency || isNaN(amount) || amount <= 0) {
    resultDiv.textContent = 'Veuillez entrer une valeur valide.';
    return;
  }

  try {

    loadingDiv.classList.remove('hidden');

    const response = await fetch(`https://v6.exchangerate-api.com/v6/e330fb82332dec6015fa3992/latest/${fromCurrency}`);
    const data = await response.json();

    if (data.result === "success") {
      const rate = data.conversion_rates[toCurrency];

      if (!rate) {
        resultDiv.textContent = 'Taux de conversion non disponible.';
        return;
      }

      const convertedAmount = (amount * rate).toFixed(2);
      resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
      console.error('Erreur lors de la conversion :', data);
      resultDiv.textContent = 'Impossible de convertir la devise. Veuillez réessayer.';
    }
  } catch (error) {
    console.error('Erreur lors de la conversion :', error);
    resultDiv.textContent = 'Une erreur est survenue lors de la conversion.';
  } finally {

    loadingDiv.classList.add('hidden');
  }
}

function swapCurrencies() {
  const temp = fromCurrencySelect.value;
  fromCurrencySelect.value = toCurrencySelect.value;
  toCurrencySelect.value = temp;

  updateCurrencyIcon(fromCurrencySelect.value, fromCurrencyIcon);
  updateCurrencyIcon(toCurrencySelect.value, toCurrencyIcon);


  convertCurrency();
}

loadSupportedCurrencies();