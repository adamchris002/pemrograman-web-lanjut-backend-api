# pemrograman-web-lanjut-backend-api

```
Tugas ini dibuat dengan PostGres dengan menggunakan DBeaver untuk databaes manager
```

```
1. cara pembuatan database dengan PG sequelize

    a. install terlebih dahulu pada terminal pg, sequelize dan sequelize-cli
    b. kemudian masukkan npx sequelize-cli init agar dapat membuat folder congfig, migrations, models, dan seeders secara otomatis yang akan digunakan nantinya
    c. sebelum membuat database postgres, maka harus diubah terlebih dahulu pada folder config file config.json seperti yang sudah saya ubah. setelah diubah maka ketik di terminal npx sequelize-cli db:create
    d. setelah berhasil membuat database maka diperlukan untuk membuat model dengan mengetik npx sequelize-cli model: generate --name .... --attributes .... (kalau pada tugas ini maka akan menjadi seperti npx sequelize-cli model:generate --name user --attributes nip:integer,nama:string,password:string)
    e. setelah berhasil membuat model, dapat diubah modelnya pada folder model. pada tugas ini nip diperlukan unique maka pada folder model sudah diubah
    f. jika sudah membuat model maka database hanya perlu di migrate, yaitu dengan menuliskan kode npx sequelize-cli db:migrate
```


