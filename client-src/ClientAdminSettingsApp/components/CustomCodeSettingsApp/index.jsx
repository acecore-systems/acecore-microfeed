import React from 'react';
import {ADMIN_URLS} from "../../../../common-src/StringUtils";
import SettingsBase from '../SettingsBase';
import {SETTINGS_CATEGORIES, CODE_TYPES} from "../../../../common-src/Constants";

function NavBlock({url, text}) {
  return (<div>
    <a href={url}>
      {text} <span className="lh-icon-arrow-right"/>
    </a>
  </div>);
}

export default class CustomCodeSettingsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentType: SETTINGS_CATEGORIES.CUSTOM_CODE,
    }
  }

  render() {
    const {submitting, submitForType} = this.props;
    const {currentType} = this.state;
    return (<SettingsBase
      title="カスタムコード"
      submitting={submitting}
      submitForType={submitForType}
      currentType={currentType}
    >
      <NavBlock
        url={ADMIN_URLS.codeEditorSettings()}
        text="Webページ間で共有されたHTMLコードを編集する"
      />
      <div className="text-xs text-muted-color mt-2">
        {'<head></head>内と<body></body>の上部と下部にコードを記述する。'}
      </div>

      <div className="mt-8">
        <div className="lh-page-subtitle">Themes</div>
        <NavBlock
          url={`${ADMIN_URLS.codeEditorSettings()}?type=${CODE_TYPES.THEMES}&theme=custom`}
          text="WebとRSSのスタイルを編集する"
        />
        <div className="text-xs text-muted-color mt-2">
          <em>マイクロフィードは、将来的に複数のテーマ/テンプレートをサポートする予定です</em>
        </div>
      </div>
    </SettingsBase>);
  }
}
