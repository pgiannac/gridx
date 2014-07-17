define({     
//Body
	loadingInfo: "ロード中...",
	emptyInfo: "表示する項目がありません",
	loadFailInfo: "データをロードできませんでした。",
	loadMore: "次をロード",
	loadMoreLoading: "ロード中...",
	loadPrevious: "前をロード",
	loadPreviousLoading: "ロード中...",

//FilterBar
	"clearFilterDialogTitle": "フィルターのクリア",
	"filterDefDialogTitle": "フィルター",
	"defaultRuleTitle": "規則",
	"ruleTitleTemplate": "規則 ${ruleNumber}",
	"noFilterApplied": "フィルターが適用されていません。",
	"defineFilter": "フィルターの定義",
	"defineFilterAriaLabel": "フィルターの定義: 複雑なフィルター規則を構成するための「フィルター」ダイアログを開きます。それぞれのフィルター規則は、列、条件、および値の組み合わせで構成されます。ダイアログが開くと、「値」フィールドにキーボード・フォーカスがあります。",
	"conditionEqual": "等しい",
	"conditionNotEqual": "等しくない",
	"conditionLess": "より小さい",
	"conditionLessEqual": "以下",
	"conditionGreater": "より大きい",
	"conditionGreaterEqual": "以上",
	"conditionContain": "含む",
	"conditionIs": "である",
	"conditionStartWith": "で始まる",
	"conditionEndWith": "で終わる",
	"conditionNotContain": "含まない",
	"conditionIsNot": "ではない",
	"conditionNotStartWith": "で始まらない",
	"conditionNotEndWith": "で終わらない",
	"conditionBefore": "以前",
	"conditionAfter": "以後",
	"conditionRange": "範囲",
	"conditionIsEmpty": "空である",
	"conditionIsNotEmpty": "空ではない",
	"all": "すべて",
	"any": "いずれか",
	"relationAll": "すべての規則",
	"waiRelAll": "次の規則のすべてに一致:",
	"relationAny": "いずれかの規則",
	"waiRelAny": "次の規則のいずれかに一致:",
	"relationMsgFront": "一致",
	"relationMsgTail": "",
	"and": "かつ",
	"or": "または",
	"addRuleButton": "規則の追加",
	"waiAddRuleButton": "新規規則の追加",
	"removeRuleButton": "規則の削除",
	"waiRemoveRuleButtonTemplate": "規則 ${0} の削除",
	"addRuleButton": "フィルター規則の追加",
	"cancelButton": "キャンセル",
	"waiCancelButton": "このダイアログのキャンセル",
	"clearButton": "クリア",
	"waiClearButton": "フィルターの消去",
	"filterButton": "フィルター",
	"waiFilterButton": "フィルターのサブミット",
	"columnSelectLabel": "列:",
	"columnSelectAriaLabel": "列: 条件部分 ${0}/${1}",
	"waiColumnSelectTemplate": "規則 ${0} の列",

	"conditionSelectLabel": "条件:",
	"conditionSelectAriaLabel": "演算子: 条件部分 ${0}/${1}",
	"waiConditionSelectTemplate": "規則 ${0} の条件",

	"valueBoxLabel": "値:",
	"valueBoxAriaLabel": "値: 条件部分 ${0}/${1}",
	"waiValueBoxTemplate": "規則 ${0} のフィルターの値を入力",
	"rangeTo": "上限",
	"rangeTemplate": "${0} から ${1} まで",
	"statusTipHeaderColumn": "列",
	"statusTipHeaderCondition": "規則",
	"statusTipTitle": "フィルター・バー",
	"statusTipMsg": "このフィルター・バーをクリックして、${0} の値にフィルターを適用します。",
	"anycolumn": "いずれかの列",
	"statusTipTitleNoFilter": "フィルター・バー",
	"statusTipTitleHasFilter": "フィルター",
	"statusTipRelPre": "一致",
	"statusTipRelPost": "規則。",
	"statusTipHeaderAll": "すべての規則に一致。",
	"statusTipHeaderAny": "いずれかの規則に一致。",
	"defaultItemsName": "項目",
	"filterBarMsgHasFilterTemplate": "${1} ${2} 中 ${0} が表示されています。",
	"filterBarMsgNoFilterTemplate": "フィルターが適用されていません",
	"filterBarDefButton": "フィルターの定義",
	"waiFilterBarDefButton": "表のフィルター",
	"a11yFilterBarDefButton": "フィルター...",
	"filterBarClearButton": "フィルターの消去",
	"waiFilterBarClearButton": "フィルターの消去",
	"closeFilterBarBtn": "フィルター・バーを閉じる",
	"clearFilterMsg": "これによりフィルターが削除され、使用可能なすべてのレコードが表示されます。",
	"anyColumnOption": "いずれかの列",
	"trueLabel": "True",
	"falseLabel": "False",
	"radioTrueLabel": "値 True",
	"radioFalseLabel": "値 False",
	"beginTimeRangeLabel": "時刻範囲の値の開始",
	"endTimeRangeLabel": "時刻範囲の値の終了",
	"beginDateRangeLabel": "日付範囲の値の開始",
	"endDateRangeLabel": "日付範囲の値の終了",
	"startsWithExpr": "${0}*",

//NestedSort
	singleSort: "単一ソート",
	nestedSort: "ネスト・ソート",
	ascending: "クリックすると昇順でソート",
	descending: "クリックすると降順でソート",
	sortingState: "${0} - ${1}",
	unsorted: "この列をソートしない",
	waiSingleSortLabel: "${0} - ${1} でソートする。${2} でソートすることを選択する",
	waiNestedSortLabel:"${0} - ${1} でネスト・ソートする。${2} でネスト・ソートすることを選択する",

//PaginationBar
	pagerWai: 'ページャー',

	pageIndex: '${0}',
	pageIndexTitle: 'ページ ${0}',

	firstPageTitle: '最初のページ',
	prevPageTitle: '前のページ',
	nextPageTitle: '次のページ',
	lastPageTitle: '最後のページ',

	pageSize: '${0}',
	pageSizeTitle: 'ページ当たり ${0} 項目',
	pageSizeAll: 'すべて',
	pageSizeAllTitle: 'すべての項目',

	description: '${0} - ${2} のうち ${1} 項目',
	descriptionEmpty: 'グリッドが空です。',

	summary: '合計: ${0}',
	summaryWithSelection: '合計: ${0} 選択済み: ${1}',

	gotoBtnTitle: '特定のページに移動',

	gotoDialogTitle: 'ページに移動',
	gotoDialogMainMsg: 'ページ番号の指定:',
	gotoDialogPageCount: '(${0} ページ)',
	gotoDialogOKBtn: '移動',
	gotoDialogCancelBtn: 'キャンセル',
	// for drop down pagination bar
	pageLabel: 'ページ',
	pageSizeLabel: '行',

//QuickFilter
	filterLabel: 'フィルター',
	clearButtonTitle: 'フィルターのクリア',
	buildFilterMenuLabel: 'フィルターの作成&hellip;',
	apply: 'フィルターの適用',

//Sort
	helpMsg: '${0} - ソートするにはクリック、ソート項目に追加するには Ctrl とクリック',
	singleHelpMsg: '${0} - ソートするにはクリック',
	priorityOrder: 'ソート優先順位 ${0}',

//SummaryBar
	summaryTotal: '合計: ${0}',
	summarySelected: '選択済み: ${0}',
	summaryRange: '範囲: ${0}-${1}',	//need translation

//Other
	indirectSelectAll: "すべて選択するには SPACE キーを押します。",	//need translation
	indirectDeselectAll: "すべて選択解除するには SPACE キーを押します。",	//need translation
	treeExpanded: "この行を省略するには Ctrl キーを押したまま左矢印キーを押します。",	//need translation
	treeCollapsed: "この行を展開するには Ctrl キーを押したまま右矢印キーを押します。"	//need translation
});

