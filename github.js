export class Github {
    // istek atmak için gerekli olan bilgiler
    constructor() {
      this.client_id = '3437bc81b612a44beaaa';
      this.client_secret = 'd258d370024f0a9098c8f1c66b7642bf38df4873';
      this.per_page = 10;
      this.sort = 'asc';
    }
  
    // api'dan kullanıcı bilgilerini alma
    async fetchUserData(username) {
      // paramatre olarak gelen kullanıcı ismine göre istek attık
      const profileRes = await fetch(
        `https://api.github.com/users/${username}`
      );
  
      // kullanıcın projelerini alma
      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
  
      // gelen cevabı json verisine çevirme
      const data = await profileRes.json();
      const repos = await repoRes.json();
  
      // fonksiyonun çağrıldı yere bilgileri gönderme
      return { data, repos };
    }
  }