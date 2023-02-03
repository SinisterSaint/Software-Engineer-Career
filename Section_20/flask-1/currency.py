"""Functions handling currency."""

from forex_python.converter import CurrencyCodes, CurrencyRates, RatesNotAvailableError

rates = CurrencyRates()
codes = CurrencyCodes()

def check_currency_code(code):
    """Is this a valid currency?

        >>> check_currency_code("USD")
        True

        >>> check_currency_code("notacurr")
        False
    
    """

    return codes.get_currency_name(code) is not None

def convert_to_pretty(code_from, code_to, amt):
    """Convert amt between currencies and return pretty result.

        >>> convert_to_pretty('USD', 'USD', 1)
        '$US 1.0'

        >>> convert_to_pretty('USD', 'USD', 1.22)
        '$US 1.22'
    
    """

    try:
        amt = f"{rates.convert(code_from, code_to, amt):.2f}"
    except RatesNotAvailableError:
        return None

    symbol = codes.get_symbol(code_to)
    return f"{symbol} {amt}"