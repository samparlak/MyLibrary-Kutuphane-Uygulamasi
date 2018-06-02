import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Router } from "@angular/router";
import { AuthService, LinkedinLoginProvider } from "angular5-social-login";
import { FacebookLoginProvider } from "angular5-social-login";
import { GoogleLoginProvider } from "angular5-social-login";
import { SocialUser } from "angular5-social-login";

/* Authorization işlemleri için firebase'den faydanılmıştır.
Açılan Firebase projesi üzerinden tüm kullanıcılara ulaşılabilir.
Projenin sahibi olarak kullanıcı hesaplarını silebilir ya da devre dışı bırakabilirsiniz.
Eğer  tüm bu yetkilerin size sağlanmasını istiyorsanız.
Firebase üzerinden proje açın ve app.component.ts ' de bulunan
apiKey: "AIzaSyAMR1ZS8EdV0ZMBxOx_qHQXpxj3hCBLD4I",
authDomain: "my-library-55278.firebaseapp.com"
verilerini kendinizinki ile değiştirin.Eğer sosyal medyadan giriş yapmak istiyorsanız
Facebook ve Google 'ın developer konsollarından proje açın ve elde ettiğiniz ID bilgilerinizi
app.module.ts ' de bulunan 
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("212943032659422")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("514611328763-e35ecjtrg77ul7tt8fj20u57pn5vnmu5.apps.googleusercontent.com")
        }
ile değiştirin.Daha sonra Firebase üzerinden oturum açma yöntemlerini aktif hale getirerek verileri eşleştirin.    
*/

@Injectable()
export class AuthEmailPasswordService {

/* ----------Email ve parola ile Login Logout Register İşlemleri ------------ */

  token: String;
  success: String;

  constructor(private router: Router, private socialAuthService: AuthService) {}

  getSuccess() {
    return this.success;
  }


  /* Firebase metotlarıyla kullanıcı kayıt işlemi.Kaydedilen kullanıcılara firebase konsoldan ulaşılabilir. */
  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.success = "Kayıt İşlemi Başarılı.";
        console.log("Kayıt başarılı");
      })
      .catch(error => {
        this.success =
          "Kayıt İşlemi Başarısız.Lütfen geçerli bir email ve parola giriniz.";
        console.log("Kayıt Başarısız : " + error);
      });
  }

  /* Firebase ile kullanıcı giriş işlemi.Kullanıcı giriş sağladığında token döndürür.*/
  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
            console.log("Token : " + token);
            this.router.navigate(["/"]);
          });
      })
      .catch(error => console.log(error));
  }

  /* Kullanıcı çıkış yapar ve tokeni sıfırlar.Token olmadan giriş yapılamaz.Tekrar bağlanması gerekir. */
  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(["/signin"]);
    console.log("Çıkış Yapılıyor...Token silindi.Token : " + this.token);
  }

  /* Dönen token this.token = token ile atanır ve return edilir.  */
  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
      });
    return this.token;
  }

  /* Token varsa true yoksa false olacaktır.
  Site içeriklere erişimin sınırlandırılması için auth-guard.ts de kullanılır. */
  isAutheticated() {
    return this.token != null;
  }

  /* ----------Sosyal Medya ile Login Logout İşlemleri ------------ */

  socialToken: string;
  user: SocialUser;
  authorized: boolean = false;

  /* app.module.ts de oluşturulan ID ler ile sosyal medya bağlantı sağlayıcıları eşleştirilir. */
  socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
     /* Sosyal Medya Kullanıcı bilgilerini kullanarak giriş yapılıyor. */
    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      console.log(
        socialPlatform + " ile giriş yapılıyor.Token : ",
        userData.token
      );
    /* Bağlantı başarılı olduğunda this.authorized=true olacaktır.Bunu site içeriklerine erişim için kullanacağız. */
      if (userData != null) {
        this.authorized = true;
        this.user = userData;  
        this.socialToken = userData.token;
        this.router.navigate(['/']);
      }

    });
  }

  /*Çıkış yapılır.token sıfırlanır.
    this.authorized = false olur  */
  socialLogout() {
    this.socialAuthService.signOut();
    this.authorized = false;
    this.socialToken = null;
    this.router.navigate(["/signin"]);
    console.log("Sosyal Medyadan Çıkılıyor... ");
  }

  /*Başarılı Giriş yapılırsa this.authorized = true ,yapılamazsa false döner
   Ve site içi erişim sınırlaması için kullanılır. */
  isSocialAuthenticated() {
    return this.authorized;
  }
}
