document.addEventListener('DOMContentLoaded', function() {
    // Anasayfa
    if (document.getElementById('anasayfa')) {
        // Profil Bilgileri
        document.getElementById('kullanici-adi').textContent = 'John Doe'; // Örnek veri
        document.getElementById('kullanici-eposta').textContent = 'john.doe@example.com'; // Örnek veri

        // Genel Bilgiler
        document.getElementById('toplam-urun').textContent = '100'; // Örnek veri
        document.getElementById('toplam-depo').textContent = '5'; // Örnek veri
        document.getElementById('toplam-siparis').textContent = '50'; // Örnek veri

        // Bildirimler
        const bildirimListesi = document.getElementById('bildirim-listesi');
        const bildirimler = ['Yeni sipariş geldi!', 'Stok seviyesi düşük!']; // Örnek veriler
        bildirimler.forEach(bildirim => {
            const li = document.createElement('li');
            li.textContent = bildirim;
            bildirimListesi.appendChild(li);
        });
    }

    // Ayarlar
    if (document.getElementById('ayarlar')) {
        document.getElementById('sifre-degistir').addEventListener('click', function() {
            alert('Şifre değiştirme işlemi...');
        });
    }

    // Depo Listesi
    if (document.getElementById('depolistesi')) {
        const depoTablosu = document.getElementById('depo-tablosu').getElementsByTagName('tbody')[0];
        const depolar = [{ad: 'Depo A', konum: 'İstanbul', kapasite: '1000'}, {ad: 'Depo B', konum: 'Ankara', kapasite: '500'}]; // Örnek veriler
        depolar.forEach(depo => {
            const row = depoTablosu.insertRow();
            const ad = row.insertCell(0);
            const konum = row.insertCell(1);
            const kapasite = row.insertCell(2);
            const islemler = row.insertCell(3);
            ad.textContent = depo.ad;
            konum.textContent = depo.konum;
            kapasite.textContent = depo.kapasite;
            islemler.innerHTML = '<button>Düzenle</button> <button>Sil</button>';
        });
    }

    // Raporlar
    if (document.getElementById('raporlar')) {
        // Stok Grafiği (Chart.js veya benzeri bir kütüphane kullanılabilir)
        // ...

        // Sipariş Tablosu
        const siparisTablosu = document.getElementById('siparis-tablosu').getElementsByTagName('tbody')[0];
        const siparisler = [{no: '1', musteri: 'ABC Şirketi', tarih: '2023-10-26'}, {no: '2', musteri: 'XYZ Şirketi', tarih: '2023-10-27'}]; // Örnek veriler
        siparisler.forEach(siparis => {
            const row = siparisTablosu.insertRow();
            const no = row.insertCell(0);
            const musteri = row.insertCell(1);
            const tarih = row.insertCell(2);
            no.textContent = siparis.no;
            musteri.textContent = siparis.musteri;
            tarih.textContent = siparis.tarih;
        });
    }

    // Sipariş Listesi
    if (document.getElementById('siparislistesi')) {
        // ... (Sipariş tablosu doldurma işlemleri) ...
    }

    // Stok İşlemleri
    if (document.getElementById('stokislemleri')) {
        // ... (Stok giriş/çıkış işlemleri ve stok tablosu doldurma işlemleri) ...
    }

    // Ürün Listesi
    if (document.getElementById('urunlistesi')) {
        // ... (Ürün tablosu doldurma işlemleri) ...
    }
});