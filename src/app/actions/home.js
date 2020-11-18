import reqwest from 'reqwest'
import * as urls from '../constants/urls'
import * as types from '../constants/ActionTypes'
export const fetchHomeData = () =>  {
    return (dispatch, getState) => {
        const url = `/mpx/getQconfig?name=qunar_miniprogram_config4.json`
        return reqwest(url)
            .then(resp => {
              console.log('resp-----', resp)
              const { ret, data } = resp;
              if(ret) {
                  dispatch({
                      type: types.RECEIVE_HOME,
                      homeData: data.wx,
                  })
              } else {
                console.error(`接口报错：${url}; ${message};`)
              }
            })
    }
}
