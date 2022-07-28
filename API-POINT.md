### User

#### Menampilkan data user

```Java
GET: /user

response:
[
    {
        "id"            : "",
        "nama"          : "",
        "nim"           : "",
        "title"         : "",
        "sampul"        : "",
    },
    ...
]
```


#### Menampilkan data user dengan `id` tertentu

```python

GET: /user/[id]

reponse:
{
        "id"            : "",
        "nama"          : "",
        "nim"           : "",
        "title"         : "",
        "sampul"        : "",
}
```
#### Menambahkan data pengguna
```python

POST: /user

data:
{
        "nama"          : "",
        "nim"           : "",
        "title"         : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure
```

#### Edit data pengguna
```java

PUT: /user

data:
{
        "id"            : "",
        "nama"          : "",
        "nim"           : "",
        "title"         : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure
```


#### Menghapus data anggota
```java

DELETE: /user/[id]

response:
true    // if success
false   // if failure
```

### Artikel

#### Menampilkan data semua artikel
```java

GET: /article

response:
[
    {
        "id"            : "",
        "judul"         : "",
        "slug"          : "",
        "penulis"       : "",
        "title"         : "",
        "deskripsi      : "",
        "sampul"        : "",
    }
    ....
]
```

#### Menampilkan data artikel dengan id  tertentu
```java

GET: /articles/[id]

response:
{
        "id"            : "",
        "judul"         : "",
        "slug"          : "",
        "penulis"       : "",
        "title"         : "",
        "deskripsi      : "",
        "sampul"        : "",
}
```

#### Menambahkan data artikel
```java

POST: /artikel

data:
{       
        "judul"         : "",
        "slug"          : "",
        "penulis"       : "",
        "title"         : "",
        "deskripsi      : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure
```

#### Mengedit data artikel
```java

PUT: /articles

data:
{      
        "id"            : "",
        "judul"         : "",
        "slug"          : "",
        "penulis"       : "",
        "title"         : "",
        "deskripsi      : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure
```

#### Menghapus data artikel
```java

DELETE: /articles/[id]

response:
true    // if success
false   // if failure
```


### Buku Almat

#### Menampilkan data semua Buku
```java

GET: /Buku

response:
[
    {
        "id"            : "",
        "porto"         : "",
        "des"           : "",
        "sampul"        : "",
    }
]
```

#### Menampilkan data buku dengan id  tertentu
```java

GET: /buku/[id]

response:
{
        "id"            : "",
        "porto"         : "",
        "des"           : "",
        "sampul"        : "",
}
```

#### Menambahkan data buku
```java

POST: /buku

data:
{       
        "id"            : "",
        "porto"         : "",
        "des"           : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure
```

#### Mengedit data buku
```java

PUT: /buku

data:
{      
        "id"            : "",
        "porto"         : "",
        "des"           : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure
```

#### Menghapus data buku
```java

DELETE: /buku/[id]

response:
true    // if success
false   // if failure
```
## Desain Database

Desain database untuk menyediakan API Points adalah sebagai berikut:

![Desain database API](https://github.com/hanisftryaa/tekweb2022/blob/main/HHH.drawio.png)