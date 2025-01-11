# new_cut_meets

## コンテナ起動手順  
1. `docker-compose build` を実行し、コンテナをビルド。  
2. `docker-compose up` を実行し、コンテナを起動。  
    2-1. `docker-compose up -d` を実行することで、バックエンドでコンテナを起動することも可能。  
3. `docker-compose stop` or `ctrl + c` を実行することで、コンテナを一時停止。
4. `docker-compose down` を実行し、コンテナを削除。
   4-1. `docker-compose down -v` を実行することで、docker volumeごとコンテナを削除することができる。

### 以下、注意事項  
`docker-compose build` を実行した時点のソースコードが反映される為、ソースを編集した際に、`docker-compose down` を実行した後に、再度 `docker-compose build` → `docker-compose up` or `docker-compose up -d` を実行すること。

## ブランチ命名規則  
製造ブランチ: `feature/<画面名 or 機能名>`
