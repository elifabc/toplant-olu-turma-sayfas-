VİRÜS PROGRAMI KULLANIYORSANIZ KAPATMALISINIZ!!!

#Projenin Amacı
Herkes için uygun bir zamanda toplantı ayarlanabilmesi ve bu toplantının Google takvime eklenebilmesi amaçlanmıştır.

##Kullanım Talimatı
1-)Mac için:
 Önce brew yoksa indirilir:
	komut = /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
	komut = (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/tete/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
 Sonra node yoksa indirilir:
	brew install node	 
 Sonra angular yoksa indirilir:
	npm install -g @angular/cli
 Ardından frontend dosya yolu açılır ve "./start_project.sh" konutu çalıştırılır.
2-)Proje çalıştığında karşınıza bir giriş ekranı çıkacaktır. Giriş ekranında sadece ad yazıp giriş yazılı butona tıklayarak giriş yapılacaktır. Giriş ekranına herhangi bir şey girilmeden diğer sayfaya girmek kısıtlandırılmıştır.
3-)Anasayfamızda beş tane buton bizi karşılar. Toplantı oluşturmak isteyen kullanıcı + yeni toplantı oluştur butonuna tıklayarak oluşturmak istediği toplantının bilgileri girilmesi istenmiştir. Oluşturulan toplantı sonrası kullanıcının ekranına bir kod çıkar ve bu kodu diğer kullanıcıların kendileri için uygun zamanları girebilmeleri için bu kod gerektiğinde toplantıyı oluşturan kişinin kodu paylaşması gerekir.
4-)Kodu alan diğer kullanıcılar bu kod ile toplantı tarihi belirle butonu ile toplantıyı oluşturan kişinin seçtiği günler arasından kendileri için uygun günleri seçerler.
5-)Toplantı kurucusu toplantı tarihi kesinleştir butonu ile yine en baştaki kod ile herkes için uygun zamanı seçer.
6-)Toplantı detayları butonunda ise yine en başta verilen kod ile o toplantıya ait bilgiler görülür. Eğer kesinleşen tarih varsa bir buton oluşur o buton ile de kesinleşen toplantı Google takvime aktarılır. 