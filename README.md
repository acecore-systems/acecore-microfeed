</br>
</br>
<div align="center">
  <a href="https://www.microfeed.org/" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/1719237/210119945-50e1d444-2d12-43d2-a96d-65bdbccecb70.png">
    <img src="https://user-images.githubusercontent.com/1719237/207514210-99ddbd03-f8f0-410a-96c8-80da1afb804d.png" width="280" alt="Logo"/>
  </picture>
  </a>
</div>

<h1 align="center">microfeed: Cloudflare でセルフホストできる軽量 CMS</h1>

<p align="center">
  <a href="https://github.com/microfeed/microfeed/issues/new?assignees=&labels=bug"><b>バグ報告</b></a>
  ·
  <a href="https://github.com/microfeed/microfeed/discussions/new?category=ideas"><b>機能提案</b></a>
  ·
  <a href="mailto:support@microfeed.org"><b>メールでお問い合わせ</b></a>
</p>

microfeed へようこそ！
これは Cloudflare 上でセルフホストできる軽量コンテンツ管理システム (CMS) です。
音声・動画・写真・ドキュメント・ブログ記事・外部 URL など、さまざまなコンテンツを **Web／RSS／JSON** 形式のフィードとして公開できます。
サーバーを自前で運用せずに CMS を持ちたいテック志向のユーザーに最適です。

microfeed は [Listen Notes](https://www.listennotes.com/) によって開発され、
Cloudflare の [Pages](https://pages.cloudflare.com/)、[R2](https://www.cloudflare.com/products/r2/)、
[D1](https://developers.cloudflare.com/d1/)、[Zero Trust](https://www.cloudflare.com/products/zero-trust/) の各サービス上で動作します。

質問・フィードバックはお気軽に <support@microfeed.org> までどうぞ！

## 📚 目次
[![Deploy to Cloudflare Pages](https://github.com/microfeed/microfeed/actions/workflows/deploy.yml/badge.svg?event=workflow_dispatch)](https://github.com/microfeed/microfeed/actions/workflows/deploy.yml)
[![CI](https://github.com/microfeed/microfeed/actions/workflows/ci.yml/badge.svg)](https://github.com/microfeed/microfeed/actions/workflows/ci.yml)
[![Email us](https://img.shields.io/badge/Email-support%40microfeed.org-blue)](mailto:support@microfeed.org)
[![stability-alpha](https://img.shields.io/badge/stability-alpha-f4d03f.svg)](https://www.microfeed.org/i/introducing-microfeed-self-hosted-cms-on-cloudflare-opensource-serverless-free-uhbQEmArlC2/)

- [📚 目次](#-目次)
- [⭐️ 仕組み](#️-仕組み)
  - [フィード形式の例](#フィード形式の例)
- [🚀 インストール](#-インストール)
  - [前提条件](#前提条件)
  - [Step 1. microfeed をフォーク](#step-1-microfeed-をフォーク)
  - [Step 2. シークレットを設定](#step-2-シークレットを設定)
  - [Step 3. GitHub Action でデプロイ](#step-3-github-action-でデプロイ)
  - [Step 4. Cloudflare ダッシュボードでクリック](#step-4-cloudflare-ダッシュボードでクリック)
  - [Step 5. 完了／公開開始](#step-5-完了公開開始)
  - [おまけ：最新版へ更新](#おまけ最新版へ更新)
- [💻 FAQ](#-faq)
- [💪 コントリビュート](#-コントリビュート)
  - [ローカルで動かす](#ローカルで動かす)
- [🛡️ ライセンス](#️-ライセンス)

## ⭐️ 仕組み

1990 年代から Web の多くは「フィード」で動いてきました。
誰かがフィードにアイテムを投稿し、他の人（やボット）が購読して更新を受け取る――そんな流れです。

microfeed を使えば、Cloudflare 上に次のようなフィードを簡単にセルフホストできます：

* ポッドキャスト用音声フィード
* ブログ記事フィード
* Instagram ライクな画像フィード（例: [llamacorn.listennotes.com](https://llamacorn.listennotes.com/)）
* YouTube ライクな動画フィード
* リンクまとめ型の個人サイト（例: [wenbin.org](https://www.wenbin.org/)）
* 外部ニュース URL のキュレーションフィード
* 製品アップデート／プレス掲載まとめサイト（例: [microfeed.org](https://www.microfeed.org/)）
* GUI ダッシュボード＋公開 JSON フィードを備えたヘッドレス CMS
* 販売用ドメイン一覧サイト
* 書籍まるごと公開サイト（例: [The Art of War](https://the-art-of-war.microfeed.org/)）
* 変更履歴サイト（例: [changelog.listennotes.com](https://changelog.listennotes.com/)）
* …などなど

Cloudflare の Pages・R2・D1・Zero Trust を組み合わせ、
**ドメイン代だけでほぼ無料** の運用が可能です。

### フィード形式の例
* Web: <https://llamacorn.listennotes.com/>
* RSS: <https://llamacorn.listennotes.com/rss/>
* JSON: <https://llamacorn.listennotes.com/json/>

ダッシュボードは直感的で、WordPress に慣れていればすぐ操作できます。

![Dashboard Screenshot](https://user-images.githubusercontent.com/1719237/209486588-00acefe0-dd51-4bfc-aed7-1f63850aa720.png)

[↑ 目次へ戻る](#📚-目次)

## 🚀 インストール

流れはざっくり次の 5 ステップです：

1. [microfeed リポジトリ](https://github.com/microfeed/microfeed) を GitHub 上でフォーク
2. Cloudflare の API トークン等を **Secrets** に登録
3. 付属の GitHub Action で Cloudflare Pages へデプロイ
4. Cloudflare ダッシュボードでカスタムドメイン等を設定
5. 完了！すぐに公開を始められます

> ドキュメント読むのが苦手でも極力簡単に導入できるようにしています。
> 将来的に Cloudflare が「Login with Cloudflare」OAuth を提供すれば、ほぼ 1 クリック導入も夢ではありません！

### 前提条件
* Cloudflare アカウント（[無料登録はこちら](https://dash.cloudflare.com/sign-up)）
* GitHub アカウント（[無料登録はこちら](https://github.com/signup)）

[↑ 目次へ戻る](#📚-目次)

### Step 1. microfeed をフォーク
[こちらをクリック](https://github.com/microfeed/microfeed/fork) するだけです。
コードを触る予定がなくても、フォーク＆同期だけで OK。

### Step 2. シークレットを設定
フォークしたリポジトリの **Settings → Secrets → Actions** で以下 5 つを追加します：

| シークレット名 | 何を入れるか |
| -------------- | ----------- |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare アカウント ID |
| `CLOUDFLARE_API_TOKEN` | Pages + D1 の「編集」権限付き API トークン |
| `R2_ACCESS_KEY_ID` | R2 の Access Key |
| `R2_SECRET_ACCESS_KEY` | R2 の Secret Key |
| `CLOUDFLARE_PROJECT_NAME` | `my-site-com` のようなプロジェクト名 |

（詳細な取得手順は元 README の画像を参照）

### Step 3. GitHub Action でデプロイ
リポジトリの **Actions → Deploy to Cloudflare Pages** ワークフローを手動実行。
✓ 緑色になれば成功。`${PROJECT_NAME}.pages.dev` でサイトが見られます。

### Step 4. Cloudflare ダッシュボードでクリック
`${PROJECT_NAME}.pages.dev/admin` にアクセスし、チェックリストに従って初期設定。
Zero Trust で管理画面にログイン制限をかけることを推奨します。

### Step 5. 完了／公開開始
ダッシュボードからアイテム追加・編集が行えます。

**Settings → Custom code** で HTML/CSS を直接編集し、自由にサイトの見た目をカスタマイズ可能です。

[↑ 目次へ戻る](#📚-目次)

### おまけ：最新版へ更新
新機能やバグ修正が入ったら、フォークを GitHub で **Sync** → **Deploy Workflow** を再実行するだけ！

## 💻 FAQ
<details>
<summary><b>ポッドキャストや動画のダウンロード数を計測したい</b></summary>

Tracking URLs 機能で [OP3](https://op3.dev/) や [Podtrac](http://analytics.podtrac.com/) のような外部解析サービスを挟めます。
**Settings → Tracking URLs** から追加してください。
</details>

<details>
<summary><b>Cloudflare 依存はリスクでは？</b></summary>

Listen Notes チーム自身も長年 Cloudflare を利用しており、利便性と安定性を評価しています。
ただし将来的には他のサーバーレスプラットフォームもサポート予定です。
</details>

<details>
<summary><b>もし Cloudflare からサービス停止されたら？</b></summary>

D1 の SQLite と R2 のバケットを定期バックアップしておけば、他環境へ容易に移行できます。
独自ドメインを使うことで移行先の切替もスムーズです。
</details>

<details>
<summary><b>microfeed を使う理由は？</b></summary>

* 既に Cloudflare を使っている
* サーバー管理をしたくない
* 無料枠で運用したい
* 新しいツールを試したい

いずれかに当てはまるなら検討する価値ありです。
</details>

<details>
<summary><b>D1 / R2 からデータをバックアップする方法は？</b></summary>

microfeed は Cloudflare D1 と R2 にデータを保存します。
バックアップしたい場合は次の 2 つを取得すれば OK です。

1. **D1** の SQLite データベース
   `wrangler d1` コマンドでダウンロードできます。
2. **R2** のメディアファイル
   S3 互換 API を利用してスクリプトで全オブジェクトを取得してください。
</details>

[↑ 目次へ戻る](#📚-目次)

## 💪 コントリビュート
バグ報告や機能提案は [Issue 作成](https://github.com/microfeed/microfeed/issues/new) を、
プルリクエストも歓迎です！

### ローカルで動かす
**前提**: node / npm, yarn, wrangler

1. ルートに `.vars.toml` を作成し、Step 2 の 5 つのシークレットを記入

    ```toml
    # .vars.toml
    CLOUDFLARE_PROJECT_NAME = "your-project-org"
    CLOUDFLARE_ACCOUNT_ID   = "account id"
    CLOUDFLARE_API_TOKEN    = "api token"
    R2_ACCESS_KEY_ID        = "access key"
    R2_SECRET_ACCESS_KEY    = "secret key"

    R2_PUBLIC_BUCKET        = "your-r2-bucket-name"
    ```

2. 開発サーバー起動

    ```bash
    yarn dev
    ```

    → <http://127.0.0.1:8788/> でアクセスできます。

`yarn dev` は `yarn dev:client`（Webpack DevServer）と
`yarn dev:edge`（Wrangler）を並列実行します。

[↑ 目次へ戻る](#📚-目次)

## 🛡️ ライセンス
microfeed は [AGPL-3.0](https://github.com/microfeed/microfeed/blob/main/LICENSE) ライセンスで提供されています。

[↑ 目次へ戻る](#📚-目次)
