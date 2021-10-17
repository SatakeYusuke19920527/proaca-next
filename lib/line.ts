import liff from '@line/liff';


export const lineLogin = () => {
  liff.init({ liffId: '1656541053-lgNv2K1m'})
            .then(()=>{ 
                liff.login()
            }).catch( (error)=> {});
}