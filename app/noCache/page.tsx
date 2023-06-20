import TimeAgo from '@/components/TimeAgo'

const getData = async (coin: string) => {
  try {
    const result = await fetch(`https://api.blockchair.com/${coin}/stats`, {
      cache: 'no-store',
    })
    if (result.ok) return result.json()
    return {}
  } catch (error) {
    return error
  }
}
export default async function Page() {
  const [ethData, btcData] = await Promise.all([getData('ethereum'), getData('bitcoin')])
  const requestTime = Date.now() / 1000
  return (
    <>
      <div>{ethData.data?.market_price_usd || 'error todo'}</div>
      <div>{btcData.data?.market_price_usd || 'error todo'}</div>
      <TimeAgo baseTime={requestTime} />
    </>
  )
}
