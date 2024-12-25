# template-laravel-nextjs-postgres

## `git clone`後の手順

### 1. `backend`の作業
1. `.env.example`をコピーし、`.env`を作成
2. ターミナルで`backend`配下に移動し、`php artisan key:generate`を実行

### 2. docker-composeを起動
1. ターミナルでプロジェクトルートに移動し、`docker-compose up`を実行
2. `sample_db`→`sample_backend`, `sample_pgadmin`→`sample_frontend`の順にコンテナが立ち上がり、全てのコンテナの起動の確認後、`localhost`にブラウザからアクセス
3. 画面が表示されていることを確認

### 動作確認
1. `http://localhost:5050`にアクセスし、`pgAdmin`が立ち上がることを確認
