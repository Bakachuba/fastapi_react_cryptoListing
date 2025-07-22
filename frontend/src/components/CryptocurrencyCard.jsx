import {Card} from 'antd'

function CryptocurrencyCard(props) {

  const {currency} = props

  if (!currency || !currency.quote || !currency.quote.USD) {
    return <p>Загрузка данных...</p>
  }

  const price = Math.round(currency.quote.USD.price).toLocaleString('en-US')

  
  const percent_change_24h =currency.quote.USD.percent_change_24h.toFixed(2)
  const percentColor = percent_change_24h >= 0 ? 'green' : 'red'
  
  const marketCapRaw  = currency.quote.USD.market_cap
  let marketCapFormatted = ''

  if (marketCapRaw >= 1_000_000_000) {
  marketCapFormatted = `$${(marketCapRaw / 1_000_000_000).toFixed(2)}B`;
} else if (marketCapRaw >= 1_000_000) {
  marketCapFormatted = `$${(marketCapRaw / 1_000_000).toFixed(2)}M`;
} else {
  marketCapFormatted = `$${Math.round(marketCapRaw)}`;
}


  return (
    <div>
      <Card 
      title={
        <div className='flex items-center gap-3'>
          <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}/>
          <span>{currency.name}</span>
        </div>
      } 
      style={{ width: 300 }}>
      
      <p>Текущая цена: {price}$</p>
      <p>Изменение цены за 24 часа: <span style={{color: percentColor}}>{percent_change_24h}%</span></p>
      <p>Текущая капитализация: {marketCapFormatted}</p>
      </Card>
    </div>
  )
}

export default CryptocurrencyCard 
