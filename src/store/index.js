export const state = () => ({
	// 立候補者
	candidates: [
		{
			id: "1",
			notificationId: "42",
			name: "篠 国昭",
			nameRuby: "しのくにあき",
			partyId: "1",
		},
		{
			id: "2",
			notificationId: "27",
			name: "高橋 ちあき",
			nameRuby: "たかはしちあき",
			partyId: "1",
			url: "http://www.tchiaki.jp/",
			facebook: "https://www.facebook.com/chiaki.takahashi.965580",
			twitter: "https://twitter.com/ta_chiaki",
			hasCar: true,
		},
		{
			id: "3",
			notificationId: "40",
			name: "伊藤 正信",
			nameRuby: "いとうまさのぶ",
			partyId: "1",
			hasCar: true,
		},
		{
			id: "4",
			notificationId: "38",
			name: "大内 しんご",
			nameRuby: "おおうちしんご",
			partyId: "1",
			hasCar: true,
		},
		{
			id: "5",
			notificationId: "28",
			name: "いでい 良輔",
			nameRuby: "いでいりょうすけ",
			partyId: "1",
			facebook: "https://www.facebook.com/ideiryousuke/",
			twitter: "https://twitter.com/idei_nakano",
			hasCar: true,
		},
		{
			id: "6",
			notificationId: "23",
			name: "伊東 しんじ",
			nameRuby: "いとうしんじ",
			partyId: "1",
			url: "http://itoshinji.jp/",
			facebook: "https://www.facebook.com/profile.php?id=100004656241559",
			hasCar: true,
		},
		{
			id: "7",
			notificationId: "6",
			name: "北原 ともあき",
			nameRuby: "きたはらともあき",
			partyId: "1",
			url: "http://t-kitahara.net/",
			facebook: "https://www.facebook.com/tomoaki.kitahara.9",
			hasCar: true,
		},
		{
			id: "8",
			notificationId: "1",
			name: "内川 和久",
			nameRuby: "うちかわかずひさ",
			partyId: "1",
			facebook:
				"https://www.facebook.com/people/Kazuhisa-Uchikawa/100008800759374",
			hasCar: true,
		},
		{
			id: "9",
			notificationId: "39",
			name: "高橋 かずちか",
			nameRuby: "たかはしかずちか",
			partyId: "1",
			url: "https://www.kazuchika.jp/",
			facebook: "https://www.facebook.com/kazuchika.jp",
			twitter: "https://twitter.com/kazuchika_jp",
			hasCar: true,
		},
		{
			id: "10",
			notificationId: "57",
			name: "若林 しげお",
			nameRuby: "わかばやししげお",
			partyId: "1",
		},
		{
			id: "11",
			notificationId: "7",
			name: "加藤 たくま",
			nameRuby: "かとうたくま",
			partyId: "1",
			url: "https://kato-takuma.com/",
			facebook: "https://www.facebook.com/kato.takuma/",
			twitter: "https://twitter.com/takuma_kato",
			hasCar: true,
		},
		{
			id: "12",
			notificationId: "20",
			name: "大津 つとむ",
			nameRuby: "おおつつとむ",
			partyId: "1",
			url: "http://t-otsu.com/",
			facebook: "https://www.facebook.com/profile.php?id=100004106014888",
		},
		{
			id: "13",
			notificationId: "21",
			name: "平地 さと子",
			nameRuby: "ひらちさとこ",
			partyId: "1",
			url: "https://satokohirachi.crayonsite.com/",
			facebook:
				"https://www.facebook.com/%E5%B9%B3%E5%9C%B0%E3%81%95%E3%81%A8%E5%AD%90-150078845838077/",
			hasCar: true,
		},
		{
			id: "14",
			notificationId: "37",
			name: "うかい 豊士",
			nameRuby: "うかいとよじ",
			partyId: "1",
			url: "http://ukai-toyoji.com/",
			facebook:
				"https://www.facebook.com/%E3%81%86%E3%81%8B%E3%81%84%E8%B1%8A%E5%A3%AB-1985398861576892/",
			hasCar: true,
		},
		{
			id: "15",
			notificationId: "41",
			name: "秋元 やすゆき",
			nameRuby: "あきもとやすゆき",
			partyId: "1",
			url: "https://yasuyuki-akimoto.com/",
			facebook: "https://www.facebook.com/akimoto.yasuyuki/",
			hasCar: true,
		},
		{
			id: "16",
			notificationId: "4",
			name: "市川 しんたろう",
			nameRuby: "いしかわしんたろう",
			partyId: "1",
			url: "https://ishintaro.jp/",
			facebook: "https://www.facebook.com/shintrou.ichikawa",
			hasCar: true,
		},
		{
			id: "17",
			notificationId: "29",
			name: "佐野 晃子",
			nameRuby: "さとうあきこ",
			partyId: "1",
			hasCar: true,
		},
		{
			id: "18",
			notificationId: "35",
			name: "久保 りか",
			nameRuby: "くぼりか",
			partyId: "2",
			url: "http://www.kuborika.jp/",
			facebook: "https://www.facebook.com/kuborika.nakano/",
			twitter: "https://twitter.com/kuborikadon",
			hasCar: true,
		},
		{
			id: "19",
			notificationId: "33",
			name: "南 かつひこ",
			nameRuby: "みなみかつひこ",
			partyId: "2",
			url: "http://minami-katsuhiko.com/",
			facebook: "https://www.facebook.com/profile.php?id=100029663615886",
			hasCar: true,
		},
		{
			id: "20",
			notificationId: "52",
			name: "平山 ひであき",
			nameRuby: "ひらやまひであき",
			partyId: "2",
			url: "http://www.komei.or.jp/km/nakano-hirayama-hideaki/",
			facebook: "https://www.facebook.com/hideaki.hirayama.18",
		},
		{
			id: "21",
			notificationId: "55",
			name: "白井 ひでふみ",
			nameRuby: "しらいひでふみ",
			partyId: "2",
			url: "http://www.shirai.ne.jp/",
			facebook: "https://www.facebook.com/hidefumi.shirai",
			twitter: "https://twitter.com/hidefumi_shirai",
			hasCar: true,
		},
		{
			id: "22",
			notificationId: "26",
			name: "小林 ぜんいち",
			nameRuby: "こばやしぜんいち",
			partyId: "2",
			url: "http://kobayashizenichi.com/",
			facebook: "https://www.facebook.com/zenichi.kobayashi",
			twitter: "https://twitter.com/koba_zen",
		},
		{
			id: "23",
			notificationId: "10",
			name: "甲田 ゆり子",
			nameRuby: "こうだゆりこ",
			partyId: "2",
			url: "http://koudayuriko.com/",
			facebook: "https://www.facebook.com/koudayuriko",
			twitter: "https://twitter.com/koudayuriko",
			hasCar: true,
		},
		{
			id: "24",
			notificationId: "31",
			name: "木村 広一",
			nameRuby: "きむらこういち",
			partyId: "2",
			url: "http://www.komei.or.jp/km/nakano-kimura-koichi/",
			facebook: "https://www.facebook.com/koichi.kimura.7",
			twitter: "https://twitter.com/koichi_kimura",
			hasCar: true,
		},
		{
			id: "25",
			notificationId: "8",
			name: "日野 たかし",
			nameRuby: "ひのたかし",
			partyId: "2",
			url: "https://hinotakashi.jp/",
			facebook: "https://www.facebook.com/takashi.hino.543",
			hasCar: true,
		},
		{
			id: "26",
			notificationId: "2",
			name: "来住 和行",
			nameRuby: "らいじゅうかずゆき",
			partyId: "3",
			url: "http://www.raiju.net/",
			facebook: "https://www.facebook.com/kazuyuki.raiju",
			hasCar: true,
		},
		{
			id: "27",
			notificationId: "15",
			name: "長沢 和彦",
			nameRuby: "ながさわかずひこ",
			partyId: "3",
			url: "http://nagasawa.lawmaker.jp/",
			facebook: "https://www.facebook.com/kazuhiko.nagasawa.2",
			twitter: "https://twitter.com/kazutigers0421",
			hasCar: true,
		},
		{
			id: "28",
			notificationId: "46",
			name: "いさ 哲郎",
			nameRuby: "いさてつろう",
			partyId: "3",
			url: "http://isa.lawmaker.jp/",
			facebook: "https://www.facebook.com/isatetsurou/",
			twitter: "https://twitter.com/isatetsurou",
			hasCar: true,
		},
		{
			id: "29",
			notificationId: "18",
			name: "小杉 一男",
			nameRuby: "こすぎかずお",
			partyId: "3",
			url: "http://kosugi.jcp-seven.jp/",
			facebook: "https://www.facebook.com/kosugi.jcp/",
			twitter: "https://twitter.com/kazuo_kosugi",
			hasCar: true,
		},
		{
			id: "30",
			notificationId: "14",
			name: "羽鳥 だいすけ",
			nameRuby: "はとりだいすけ",
			partyId: "3",
			url: "http://hatori.jcp-seven.jp/",
			facebook: "https://www.facebook.com/hatori.jcp/",
			twitter: "https://twitter.com/hatoridaisuke",
			hasCar: true,
		},
		{
			id: "31",
			notificationId: "45",
			name: "広川 まさのり",
			nameRuby: "ひろかわまさのり",
			partyId: "3",
			url: "http://hirokawa.jcp-seven.jp/",
			facebook: "https://www.facebook.com/profile.php?id=100008930945865",
			twitter: "https://twitter.com/hirokawa_m",
			hasCar: true,
		},
		{
			id: "32",
			notificationId: "44",
			name: "浦野 さとみ",
			nameRuby: "うらのさとみ",
			partyId: "3",
			url: "http://urano-satomi.jp/",
			facebook: "https://www.facebook.com/urano.satomi",
			twitter: "https://twitter.com/urano_satomi",
			hasCar: true,
		},
		{
			id: "33",
			notificationId: "34",
			name: "酒井 たくや",
			nameRuby: "さかいさくや",
			partyId: "4",
			hasCar: true,
		},
		{
			id: "34",
			notificationId: "54",
			name: "森 たかゆき",
			nameRuby: "もりたかゆき",
			partyId: "4",
			url: "https://mori-takayuki.jp/",
			facebook: "https://www.facebook.com/moritakayuki1983/",
			twitter: "https://twitter.com/moritakayuki",
			hasCar: false,
		},
		{
			id: "35",
			notificationId: "3",
			name: "中村 延子",
			nameRuby: "なかむらのぶこ",
			partyId: "4",
			url: "http://www.nakamuranobuko.jp/",
			facebook: "https://www.facebook.com/nakamuranobuko.jp/",
			twitter: "https://twitter.com/nobuko0902",
			hasCar: false,
		},
		{
			id: "36",
			notificationId: "24",
			name: "山本 たかし",
			nameRuby: "やまもとたかし",
			partyId: "4",
			url: "http://takashiyamamoto.jp/",
			facebook: "https://www.facebook.com/yamtkc/",
			twitter: "https://twitter.com/yamtkc",
			hasCar: true,
		},
		{
			id: "37",
			notificationId: "51",
			name: "ひやま 隆",
			nameRuby: "ひやまたかし",
			partyId: "4",
			url: "http://hiyama.tv/",
			facebook: "https://www.facebook.com/hiyamatakashifp",
			twitter: "https://twitter.com/hiyamatakashi",
			hasCar: true,
		},
		{
			id: "38",
			notificationId: "12",
			name: "杉山 司",
			nameRuby: "すぎやまつかさ",
			partyId: "4",
			url: "http://sugiyamatsukasa.jp/",
			facebook: "https://www.facebook.com/kikyo.sugiyama",
			twitter: "https://twitter.com/sugiyama0328",
			hasCar: true,
		},
		{
			id: "39",
			notificationId: "32",
			name: "河合 りな",
			nameRuby: "かわいりな",
			partyId: "4",
			url: "https://kawairina.net/",
			facebook: "https://www.facebook.com/kawairina0831/",
			twitter: "https://twitter.com/rina_kawai_rina",
			hasCar: true,
		},
		{
			id: "40",
			notificationId: "50",
			name: "斉藤 ゆり",
			nameRuby: "さいとうゆり",
			partyId: "4",
			url: "https://www.saitoyuri.jp/",
			facebook: "https://www.facebook.com/yuri.saito.7524",
			twitter: "https://twitter.com/saitoyurilis",
			hasCar: false,
		},
		{
			id: "41",
			notificationId: "48",
			name: "内野 大三郎",
			nameRuby: "うちのだいざぶろう",
			partyId: "5",
			url: "http://www.daizaburo.jp/",
			facebook: "https://www.facebook.com/uchino.daizaburo",
			twitter: "https://twitter.com/dai326uchino",
			hasCar: true,
		},
		{
			id: "42",
			notificationId: "36",
			name: "渡辺 たけし",
			nameRuby: "わたなべたけし",
			partyId: "5",
			url: "http://www.nabetake0112.jp/",
			facebook:
				"https://www.facebook.com/people/%E6%B8%A1%E8%BE%BA-%E3%81%9F%E3%81%91%E3%81%97/100009458795271",
			twitter: "https://twitter.com/nabetake_f5",
		},
		{
			id: "43",
			notificationId: "53",
			name: "むとう 有子",
			nameRuby: "むとうゆうこ",
			partyId: "6",
			url: "http://yuukomutoh.kilo.jp/",
			hasCar: true,
		},
		{
			id: "44",
			notificationId: "5",
			name: "近藤 さえ子",
			nameRuby: "こんどうさえこ",
			partyId: "6",
			url: "http://www.koeda-net.com/",
			hasCar: true,
		},
		{
			id: "45",
			notificationId: "56",
			name: "いながき じゅん子",
			nameRuby: "いながきじゅんこ",
			partyId: "6",
			url: "https://inagaki-junko.jp/",
			facebook: "https://www.facebook.com/InagakiJunko.nakano/",
			twitter: "https://twitter.com/i_junko",
			hasCar: false,
		},
		{
			id: "46",
			notificationId: "25",
			name: "石坂 わたる",
			nameRuby: "いしざかわたる",
			partyId: "6",
			url: "http://ishizakawataru.jp/",
			facebook: "https://www.facebook.com/ishizakawataru/",
			twitter: "https://twitter.com/ishizakawataru",
			hasCar: true,
		},
		{
			id: "47",
			notificationId: "19",
			name: "小宮山 たかし",
			nameRuby: "こみやまたかし",
			partyId: "6",
			url: "https://komiyamatakashi.wordpress.com/",
			facebook: "https://www.facebook.com/takashi.komiyama.50",
			twitter: "https://twitter.com/komiyamatakashi",
			hasCar: false,
		},
		{
			id: "48",
			notificationId: "9",
			name: "細野 かよこ",
			nameRuby: "ほそのかよこ",
			partyId: "7",
			url: "http://hosono.seikatsusha.me/",
			twitter: "https://twitter.com/hosonokayoko",
			hasCar: true,
		},
		{
			id: "49",
			notificationId: "16",
			name: "つちや 誠",
			nameRuby: "つちやまこと",
			partyId: "8",
			url: "http://tsuchiya.website/",
		},
		{
			id: "50",
			notificationId: "13",
			name: "しらかし 貴子",
			nameRuby: "しらかしたかこ",
			partyId: "9",
			url: "http://sirakashi.net/",
			facebook: "https://www.facebook.com/profile.php?id=100015148997273",
			twitter: "https://twitter.com/shirakashi0815",
			hasCar: true,
		},
		{
			id: "51",
			notificationId: "60",
			name: "竹村 あきひろ",
			nameRuby: "たけむらあきひろ",
			partyId: "10",
			twitter: "https://twitter.com/takemura2678",
			hasCar: true,
		},
		{
			id: "52",
			notificationId: "43",
			name: "吉田 康一郎",
			nameRuby: "よしだこういちろう",
			partyId: "6",
			url: "http://k-yoshida.jp/koichiro/",
			facebook: "https://www.facebook.com/k.yoshida.jp",
			twitter: "https://twitter.com/yoshidakoichiro",
			hasCar: true,
		},
		{
			id: "53",
			notificationId: "30",
			name: "立石 りお",
			nameRuby: "たていしりお",
			partyId: "6",
			url: "https://rio-tateishi.com/",
			facebook: "https://www.facebook.com/riotateishi0129/",
			twitter: "https://twitter.com/Tateishi_Rio",
			hasCar: true,
		},
		{
			id: "54",
			notificationId: "49",
			name: "ほそがい ゆう",
			nameRuby: "ほそがいゆう",
			partyId: "6",
			facebook: "https://www.facebook.com/profile.php?id=100007292086876",
			twitter: "https://twitter.com/sce_yu",
		},
		{
			id: "55",
			notificationId: "22",
			name: "間 ひとみ",
			nameRuby: "はざまひとみ",
			partyId: "6",
			url: "https://www.hazamahitomi.tokyo/",
			facebook: "https://www.facebook.com/hazamahitomi/",
			twitter: "https://twitter.com/hitomihazama",
			hasCar: false,
		},
		{
			id: "56",
			notificationId: "58",
			name: "水間 純",
			nameRuby: "みずまじゅん",
			partyId: "6",
			facebook: "https://www.facebook.com/mizuma.jun",
			hasCar: true,
		},
		{
			id: "57",
			notificationId: "11",
			name: "染川 たかひと",
			nameRuby: "そめかわたかひと",
			partyId: "11",
			url: "http://a-bc.party/",
			twitter: "https://twitter.com/somekawa_abc",
			hasCar: false,
		},
		{
			id: "58",
			notificationId: "17",
			name: "大木 慶一",
			nameRuby: "おおきけいいち",
			partyId: "6",
			facebook: "https://www.facebook.com/profile.php?id=100013346256399",
			twitter: "https://twitter.com/aUWh37Y72IZeuaq",
		},
		{
			id: "59",
			notificationId: "47",
			name: "太田 亘",
			nameRuby: "おおたわたる",
			partyId: "6",
		},
		{
			id: "60",
			notificationId: "59",
			name: "川部 貴之",
			nameRuby: "かわべたかゆき",
			partyId: "6",
			url: "https://takayukikawabe.wixsite.com/offical",
		},
	],
	// 政党
	parties: [
		{
			id: "1",
			name: "自由民主党",
			shortName: "自民",
		},
		{
			id: "2",
			name: "公明党",
			shortName: "公明",
		},
		{
			id: "3",
			name: "日本共産党",
			shortName: "共産",
		},
		{
			id: "4",
			name: "立憲民主党",
			shortName: "立憲",
		},
		{
			id: "5",
			name: "都民ファーストの会",
			shortName: "都ファ",
		},
		{
			id: "6",
			name: "無所属",
			shortName: "無所属",
		},
		{
			id: "7",
			name: "中野・生活者ネットワーク",
			shortName: "生活",
		},
		{
			id: "8",
			name: "国民民主党",
			shortName: "国民",
		},
		{
			id: "9",
			name: "幸福実現党",
			shortName: "幸福",
		},
		{
			id: "10",
			name: "NHKから国民を守る党",
			shortName: "NHK",
		},
		{
			id: "11",
			name: "ブラック企業をなくす党",
			shortName: "ブラック",
		},
	],
});

export const getters = {
	candidatesSortedByNotificationId: state => {
		return state.candidates.slice().sort((a, b) => {
			return parseInt(a.notificationId) < parseInt(b.notificationId)
				? -1
				: 1;
		});
	},
	// 届出番号IDで候補者を返します
	getCandidateByNotificationId: state => id => {
		return state.candidates.find(el => el.notificationId === id);
	},
	// 政党IDで候補者一覧を返します
	getCandidatesByPartyId: state => id => {
		return state.candidates.filter(el => el.partyId === id);
	},
	// 政党
	getPartyById: state => id => {
		return state.parties.find(el => el.id === id);
	},
};
