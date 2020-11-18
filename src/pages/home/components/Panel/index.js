import style from './style'

export const Panel= props => {
  const { data } = props
  console.log('panel++++>',data)
  return <div className='Panel'>
            {
              Object.keys(data).map(item=>{
                return <div className='Panel-Item' style={{backgroundImage:`url(${data[item].logoSrc})`}}>
                          <span>{data[item].bizTitle}</span>
                      </div>
              })
            }
         </div>
}

export default Panel
