# new_cut_meets

## コンテナ起動手順  
1. `docker compose watch` を実行し、コンテナをビルドアップ  
   1. 上記、コマンドは、 `backend/`, `frontend/`配下にあるファイルの変更を監視しており、修正を検知した場合、コンテナに対して即時同期をするコマンドです。  
2. コンテナが不要になった場合、 `ctrl + c` でコンソールから抜けた後、 `docker compose stop` でコンテナを停止してください。  
   1. `docker compose down`, `docker compose down -v` を実行した場合、コンテナイメージが破棄される為、次回の `docker compose watch` にコンテナのビルドから始まります。  
        => composer install コマンドが走るため、backendコンテナのビルドに異様に時間がかかります。  

### 以下、注意事項  
上述していますが、コンテナの停止時には必ず `docker compose stop` を実行してください。

## ブランチ命名規則  
製造ブランチ: `feature/<画面名 or 機能名>`
