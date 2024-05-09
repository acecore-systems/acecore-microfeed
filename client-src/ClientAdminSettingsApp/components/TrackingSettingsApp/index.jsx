import React from 'react';
import AdminTextarea from "../../../components/AdminTextarea";
import {buildAudioUrlWithTracking} from "../../../../common-src/StringUtils";
import SettingsBase from '../SettingsBase';
import {SETTINGS_CATEGORIES} from "../../../../common-src/Constants";

export default class TrackingSettingsApp extends React.Component {
  constructor(props) {
    super(props);

    const currentType = SETTINGS_CATEGORIES.ANALYTICS;
    const {feed} = props;
    let trackingUrls = '';
    if (feed.settings && feed.settings[currentType]) {
      trackingUrls = feed.settings[currentType].urls || [];
      trackingUrls = trackingUrls.join('\n');
    }
    this.state = {
      trackingUrls,
      currentType,
    };
  }

  render() {
    const {trackingUrls, currentType} = this.state;
    const {submitting, submitForType, setChanged} = this.props;
    const urls = trackingUrls.trim() !== '' ? trackingUrls.trim().split(/\n/) : [];
    const exampleAudio = 'https://example.com/audio.mp3';
    return (<SettingsBase
      title="Tracking urls"
      submitting={submitting}
      submitForType={submitForType}
      currentType={currentType}
      onSubmit={(e) => {
        this.props.onSubmit(e, currentType, {
          urls,
        });
      }}
    >
      <div>
        <AdminTextarea
          placeholder="Put a tracking url on each line, e.g., https://op3.dev/e/, https://pdst.fm/e/, https://chrt.fm/track/..."
          value={trackingUrls}
          onChange={(e) => this.setState({trackingUrls: e.target.value}, () => setChanged())}
        />
      </div>
      <div className="mt-4 text-xs text-helper-color">
        microfeedは、メディアファイルのURLの前にサードパーティのトラッキングURL (例．<a href="https://op3.dev/">OP3</a>, <a
        href="http://analytics.podtrac.com/">Podtrac</a>, <a href="https://chartable.com/">Chartable</a>...) を自動的に追加するため、ダウンロード統計を簡単に追跡できます。これは <a href="https://lowerstreet.co/blog/podcast-tracking" target="_blank" rel="noopener noreferrer">ポッドキャスト業界では一般的な方法です。</a>.
      </div>
      {urls.length > 0 && <div className="mt-4 text-xs break-all text-helper-color">
        <div className="mb-2">
          例:オーディオのurlが {exampleAudio}の場合、rssフィードの最終urlは次のようになります:
        </div>
        <b>{buildAudioUrlWithTracking(exampleAudio, urls)}</b>
      </div>}
    </SettingsBase>);
  }
}
