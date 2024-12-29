'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4ba8e1e36c3fb9b53de1d7c40cf0efcc",
"version.json": "93f79c4845bca743997d155b19290ff9",
"index.html": "c4653a26b33ad08fbfaca8e898ae1756",
"/": "c4653a26b33ad08fbfaca8e898ae1756",
"main.dart.js": "981242acef7dbcac4c8e31e28f84765a",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3d4b697a65c4da99836cdc0c6c716a21",
".git/config": "95c648ceddbee6b597d423242367472c",
".git/objects/0d/c7e141e56d6dddcdebef5061be6865cf0eeb78": "0116da80ce97958875bcaf3bb8e237a9",
".git/objects/59/068903bf9f2645e0cfce4263f447dd912212cc": "8d65878e93ad46151ecb33b3ba2e0cbc",
".git/objects/92/d1feaf5f61a2556c4676bdda7809af9833b654": "f462fbf151a313008957cccd9e15959a",
".git/objects/3e/fcdc945d9510bc231a22ea5fb133ef14046228": "1f9256c914020f2f98eb90440fc658fc",
".git/objects/68/92745afb744740a038f49c3aa08a21c04d346d": "55aecb0448721f7deee55f768b42f82b",
".git/objects/6a/eb87dbca8ef46281f9e1893c3795ca2762d839": "e7d61e5de4ae2cfe1848727686685276",
".git/objects/32/2fb47e2fe8e620d7efb88aeed4a39911d60919": "d541eb6e48ce9a5bc3814f4e0740636f",
".git/objects/35/fce79113fe7f502713f48b2f3521c8134e38a7": "47bc6c503c81e22f01b2e13c0f3366dc",
".git/objects/56/201427cd300a5311f6b06f636bb4ebd9a4a54d": "8e213d472d8e54541179538b2c703d8a",
".git/objects/56/0227d6f691b5edbccc352cdb42e65e3b5c9077": "cc005653dc6688ada3215f0d7ae89f2d",
".git/objects/0b/593e970fb5d8d158ae30c0344c6781e7f9e0de": "84abe752a2f6f091332d6072f7215030",
".git/objects/60/6fb228f8408aa7026755378a43e3cfd4e87b9a": "a55a987fcace8a49eddf981e051566f5",
".git/objects/9d/a3bdf7013ed525b2fa8aa729094e30df18eb8d": "369b72e689de683a875ba284353478f4",
".git/objects/9c/8fc111761363d2342a6ed508e82d314e6205b3": "3be3e28ba541a104bdfe1e889fa6f0bf",
".git/objects/9c/4bbaecb0f10854c72fb1f7a5f9cbbba2f71383": "cad34c0ccc62a5aa6d5462e65ee9bafe",
".git/objects/9c/f28a525e9247e822d9edc3c7daa195b0f501f1": "9a34b5a78d0b57676308dc3dbeb7de06",
".git/objects/df/cc0490211f19e01bd0f6446d3765c87b678c53": "65961830e5cc98e4869da9a12e50d651",
".git/objects/da/e59900e7d77987598b992cccf1566acb30a302": "b3964ff8d021753569aefb9873241023",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/e50526aab46f43a6a82e38fef6506971fdbc71": "fc16f58e7909c4fd4327c325e9e21274",
".git/objects/ae/2fc7a7e0f3c3c7dbec6124d501872a4380089c": "50b00fdd00a4ec859e6dd4ee98199750",
".git/objects/ab/359e56fe2d5b082c912dec56244ac1008205e6": "ad6331daa152c17ca012f41dd2f570f4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/0841c368fd0308c52f5f6f08bc2a54ca9c4c99": "fbbcb39649ff7bb00002f1592da0b118",
".git/objects/c9/a0364e27ef9fa665d94d95111bce8e5a6dcc99": "aa9a9ee3d56398d9deb8946ed5abd652",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/01ec0b28b136e1adbed85712347f429f748203": "3edb730bc1bea3df69fb303c2cb453d3",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/1a2e89a46a961c387ec70585dd218d759dfd79": "ee85a404a9cfc45876a33c4f3b1a4d6b",
".git/objects/27/a9877c76c0b57e535485f0f68af50340d97b5f": "169ebf09a5afe72b9ac465046261c942",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/776f08559c21db37214fd43af52bf45f8245a5": "6ce20af18fc39a313ea682531d941dbb",
".git/objects/7d/ace451f355b1ee5b8eccc0e0544d8391db96ab": "b38dfe72f328b4a3747b1a444855f7bd",
".git/objects/7d/bf171868e4167d6540f87d01929dbd263cb5ca": "cc531b93fbc34acac30a7146d374fabf",
".git/objects/29/35c6fe594b4d78af89501a2ac43598aba85ef8": "3b65db4ea228e3af706d852194cde3f3",
".git/objects/29/78ce048c10b1f4f176211615459bb456207d92": "053d37f798b8ee3b0f26fe8a72844e88",
".git/objects/7c/6fc80de4360928ac79bfca8fb221443e702428": "c88308e027eb01e9e76d59f7c5c0a94a",
".git/objects/89/dcb199a391d09398a4f017f5cf58bd63b1a03e": "393aa899475ffc1d07aaf318e5a72359",
".git/objects/45/a858beee9e1a7448dbc1185cbbd201d41d890e": "f3cef965f864dbfcb46c79729b95fcb4",
".git/objects/45/6c269254a2ca52e673d9cddf89aff4a9086890": "2e853411544db435ffbb2fc234ef3660",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/80/112aa4011182a4350574365b19af2fa67e25d8": "9385a387a26171384e1087786422505d",
".git/objects/8f/4801209772d7e73570abf1658c7b850c5781c7": "31229255502c0c957b7a5e99f3412dcf",
".git/objects/8f/25defb4b64ae4da0a555848088e65628542f7d": "a765e1ad0a489859ad42532447e39b33",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/6cfa5577711df9835a9426f267c4299ac9fb46": "feb5d23d624d210343c97b6795424e02",
".git/objects/21/750b8b454cfa4924ec872bd47a39b960f14fa4": "86b4395558fc2ae3e89e372962333287",
".git/objects/44/f15e28c2fd006d706686f0c5aed8dd7bda4209": "bee9f6fad300c356fb63aab4e25f53d9",
".git/objects/2a/174f1a6f8f42362f957aaaf91a3f07d7212a54": "80b0548fff29e65096bd902e7d047d93",
".git/objects/43/98c21d2cdb422c8f53c8452ef3c31da436e2c6": "c267e204b3b49f76979261bcb4c34bd0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ad6d969f2ecb3ac4cde56506d58ac2c4665c51": "a6089d2abe6f4596ae26dfa5b7d64088",
".git/objects/9f/7f931f7348ae0358911e6bab46d8fb573586c3": "853e700c4cb824e5fa2fb831731f04be",
".git/objects/00/3efe34cb5370c4225bcd24dc1db65209158004": "101e9a1067538a600c1762b2c1bdd695",
".git/objects/5c/0cc718b5daf1fba252b77c787ddf96d7752d81": "4440bc3f62587513f9f67fd316ce209f",
".git/objects/5c/e21e4a35d850a2687981b8eab53fa133ef9e39": "ddae5a4cce07f879de27b24afba0f89a",
".git/objects/09/c6078b2fff0cf24c08ab758a3703b1070b4875": "94ad367082982b8de0461b2a8422ad79",
".git/objects/5d/9cba029097376e098a0737dd664289fd6ad68b": "eefc066ea2b7eeb9c8eb983ff6606e36",
".git/objects/5d/47bd72c43b9f7307a97cf6fa15b0a7e8e40260": "ddff70547fdab8eb8a7c10dd60b8b8d9",
".git/objects/91/6ad667042e9f08ee3a45b03f44234043d252b4": "c3418e888ff4a1443c55de6898993811",
".git/objects/91/17cda8a1a753e03e0e1bce7ae4507b08b598ad": "4244885def9b044e826675e7b9e4bbd3",
".git/objects/53/fe805d3be812e250a2e30a525adc06c4d1dbe4": "5d34b98cb378c25d95e5cc2e394ace9d",
".git/objects/3f/a31d1c86a70a6e36f9f57b75b2c840a703ba49": "c41014da877537035616291b1943271c",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/a6d18e395f01aa7824f5e9475f39400547f21d": "cf9153ec67787e2e60d681199ca996f9",
".git/objects/39/deb2e7b5de843c5aa177c4acbf21671c9de84a": "fef06a3050e8fec45ee99c1a31bcf3d4",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/ce3cbc920887295cc5cb99516a156a80f92160": "2c8fc9399b97e7344a8dd9df6a64eddc",
".git/objects/63/4c89fe170f2507d61b734182e8bba60a3341a1": "3e219f82a968fc557af1880430084301",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/4dd2ee4664d8781c34d432977b1de8ce1abe8f": "6cb84b78b301932243a4d08fb3171f5b",
".git/objects/b8/de0079a925ffccc48fddfd6907f9d0f69ef631": "000897e104951f16cd0679d61752a87c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/a2a68d2c51ecbfe438100342eda9aac86adc88": "35721d1f8b87a8ee07945a6784f2fa62",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/c7120c916344b81ea982791e1de3830bd85438": "fdb07ba60760574bed5caa1a81165d36",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/92f19836f299ea5c88a365fb2036062d20cc5c": "5b9b4ae6bac4748bf27e53cac18397eb",
".git/objects/ea/861d37d058ce8cd9273e22b5fa8b0d9c5b906c": "fd0f61438f8ae0e4831071a3ca7399aa",
".git/objects/cd/f8b5022d609490821131b3d3c570adf3e653d2": "e9b5724384bd174a2652aa54def24df9",
".git/objects/cd/3171aa62d06302b3d4ec32951803e835975db2": "f1a6474127e0912f10af5b3f4e484bcc",
".git/objects/f9/7149c583b6d5e6a0b31a4dae0ce4a71085b8e1": "6ecb093e154f2b6a662d9c73b3b66f91",
".git/objects/e8/c6edfcb78ff13b6da75079ce1a8e533d7fc59d": "890b76f134e0b141b73e58f168e9ba96",
".git/objects/c2/95b9ab02c69df5a22fe14046e878d124605b7f": "ebde7339edbda34b698d390906fe3f45",
".git/objects/f6/f6ad6a7898e01db1e3e6ae115f65326a7af457": "dcbc64f0114e2d35f37e0fee117d0f54",
".git/objects/e9/730e9dc0f3f4618c2526127d5d929ee266c14f": "9ff0306334334383e3a8bfe78924542d",
".git/objects/f8/7a41dddf519793aed3e13db39a3c0363572922": "01864e384eede13f947f0db28a642fe1",
".git/objects/e0/ed72c56bb84eb19fb85faf3c0065380dd59cb2": "ac42a66b91d31ada44dba421d5fbf4f1",
".git/objects/2d/9c4dfd9910a2d9844664c43294f7ce6a7120d2": "5c977ab5345018cc6e76210910c72e0a",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/77/95fb948963fa3519400147a79fdb3bf5b6a084": "df0012eafeaa7f0620e84fa6917bb075",
".git/objects/70/f3854c4003b0e32e1f35e6b533834700aabeb2": "4eceae47c55acc2b45e0a4f702a2ffb8",
".git/objects/4a/c2d852f35d78f1b65579fc19f7fb384387d0ff": "06dcf767286cabf58fbdc345da48dfbb",
".git/objects/24/ab76d095242977d804cb893d1c44141c10c584": "844ab8140186f82ebdd4e61d9af6cdba",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/85/e94cb842f229d2f27dd3540b1c97216b335215": "f665ead89c5d10b258092173685b00df",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/78/932a3012824a2b46dfa36f473dbbe439047c59": "d49e899f1eda40c4b69096bf0ce206f1",
".git/objects/8b/8ef790946c749d6f179ddc81c6016ccdb06d3d": "8ff2ba13bfb32c283868635dfa16a63b",
".git/objects/8b/ef68a05e75c5e198e09c78bf826f2b217706c0": "094472ec7e2ae4c31aa9e789bb471b9c",
".git/objects/8e/e8ef810fd3f9dacced024117366836d45032b1": "b9005fd25344e94393b55978311811c0",
".git/HEAD": "71e762a52c104f0252b42830ebd25258",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "756a88736da36a7fcd37e59054fd4f81",
".git/logs/refs/heads/enhancement": "df42f9f8127458281477896204cef1aa",
".git/logs/refs/heads/deploy": "332ce935f08cde41e001e45abc960a04",
".git/logs/refs/heads/main": "b4d4bfc185ae6ab2ea35472c94b2058f",
".git/logs/refs/remotes/origin/enhancement": "b949afaf38297006b04401b5fc34968d",
".git/logs/refs/remotes/origin/deploy": "8d24fdcab4e152392a460aa86a618ca5",
".git/logs/refs/remotes/origin/main": "9baef0286a403c3654dbb99257d7fa61",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/enhancement": "1151aa75ef179dc0c4dad1022012bcc2",
".git/refs/heads/deploy": "1151aa75ef179dc0c4dad1022012bcc2",
".git/refs/heads/main": "817c8e5a70d6c17c8082b6c5f33efad0",
".git/refs/remotes/origin/enhancement": "0f4df6ee05a92134ef0a5668cc2e6c19",
".git/refs/remotes/origin/deploy": "1151aa75ef179dc0c4dad1022012bcc2",
".git/refs/remotes/origin/main": "817c8e5a70d6c17c8082b6c5f33efad0",
".git/index": "b06e4d9cc0780dd8a3a8446caa2c0f94",
".git/COMMIT_EDITMSG": "efdc4fe16fabeb957fe044031cb0cc53",
".git/FETCH_HEAD": "d1acfe725e80ff561a0ad95cc59dc257",
"assets/AssetManifest.json": "21636d4d0da49c71b2402182636a4fd0",
"assets/NOTICES": "49237b0774848ed63f2595f0bbd79ec6",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/AssetManifest.bin.json": "1ffd9cb2e03d1734532c34e50833de32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a76514a0e82b9f7a4a206046bab08053",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1ccc5b29bc3fc1161af0a705a8d1ea8b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ea7128ca1f6efd2c174c13331643ae47",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "46d267fb66c08a010a07b5c0cc79ec36",
"assets/fonts/MaterialIcons-Regular.otf": "0850bca0a1ab5b9fbcc5ed4624ad3bfe",
"assets/assets/images/portfolio_01.jpg": "207313764b799796df1b694884100973",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/hi_there.png": "1ac6f5101b6a5511f4ad8f8965a49f89",
"assets/assets/images/portfolio_03.jpg": "81afe2fd53228057f3bf1e1cefd5a3f5",
"assets/assets/images/portfolio_02.jpg": "0e43d95950a8009a3e58ca509b274a3b",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/portfolio_06.jpg": "015d9a88eeaa1a0f5e39b81d32e1bf87",
"assets/assets/images/portfolio_05.jpg": "2e1ba9c4441315539707b9b202339879",
"assets/assets/images/portfolio_04.jpg": "412a168cec178e10863238a2ee647078",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/dev_aboutme.png": "6a7617b4f9eb0bf9ce01773e5f130645",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/app-idea.jpg": "6d859d33cf0a4b7e4535960aa205bc41",
"assets/assets/images/ghana_flag.png": "b0afee866ab3333560a0072c5d53bce2",
"assets/assets/images/app-idea-2.jpg": "4cfb3d158749ac88e75e735891aab6b1",
"assets/assets/images/logo_dark.png": "172c6851a256eb6ca04d9b99cc231ac8",
"assets/assets/images/blog_02.jpg": "01c4b84663980a0b4f55f4bd196492bd",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/blog_03.jpg": "5f88a99b651c6dbad988d684c6fc41b3",
"assets/assets/images/blog_01.jpg": "cd78990246f63c4d64ca5c26bcf31289",
"assets/assets/images/box_cover_gold.png": "5096968515ff8697cf8efd59358dc268",
"assets/assets/images/dev_header.png": "f54219377d139221417800e642759b49",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/dots_globe_yellow2.png": "d1394584431e43b6973ca031de59a284",
"assets/assets/images/logo_light.png": "708b0d915b6cededbda03f881683e529",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/dev_award.png": "9330277f7c4279bb73c0f637f6871af1",
"assets/assets/images/blob_drumstick_black.png": "381f70d9f8dd4fbbb720214fa02939a2",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
