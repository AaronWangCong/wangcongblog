import getCookie from '@/lib/get-cookie'
import Cookies from 'js-cookie'

export default function ({store, route, redirect, req}) {
  // If the user is not authenticated
  const auth = Cookies.get("auth");
  console.log('middle')
  console.log(auth)
  if (auth) {
    store.commit('userLogin/setAuth', auth)
    return store.dispatch('userLogin/getUserInfo')
  }
  const routePath = route.path
  const extraPath = ['/', '/en']
  if ((!auth) && extraPath.indexOf(routePath) === -1) {
    return redirect('/login')
  }
}
