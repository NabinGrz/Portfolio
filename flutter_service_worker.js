'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "714067799d40bf5998d1dad68ed78d7e",
".git/config": "a28d01500407da334f78a3a58ffd5ed8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d065ee44ed9b00fe5662345b900aa506",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9cc5fba54f726c988c00620db808ccb8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ccbb38f02c94294adaf813c4e2d8b262",
".git/logs/refs/heads/main": "22fa8d51b89d4bb683ea7eff8ef2f6bd",
".git/logs/refs/remotes/origin/main": "f56a65a8ef286e6e1690231bfca2e019",
".git/objects/02/41423c623f7fa78f058bf7a80123a8eac8c787": "050b3cdf68e4e94f216387977e08e2ae",
".git/objects/03/0bfd0f6c965760374589188ef3b1ad386bd01d": "9276cf21b7d9016065de6bc0d909952e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/446cfba37b85edfc2ce7bf470d3155816882bf": "3d7a715d76f026487e21b6939f69a5b5",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/b72ce9102430562ea4451d3ce2d5d819dcc874": "d0ad5144cc3826c3b3170c8848ed27ab",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/6ab35d2ac7e7ffe4ecc50e370eef87a5e61a56": "449702a97e9bfd246b05bde5501a5c73",
".git/objects/0a/fb4eca098a8202f86c9fd5d06f0b67980c9a9c": "31e4274648f75b3f25574269250a758e",
".git/objects/0f/2159c5a7caa77f34f04badf336b0cc88f638c2": "8705b337e75ed1e4071565c06c4d2d63",
".git/objects/13/c10532af89756f9972c827d3244a277212aebc": "65857fab328a9a281303c906971d7417",
".git/objects/17/7ec07bf6de08c0b33e06b41f15b9ea684cb591": "07ce52b707a20ffe6148805fec7cafd6",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1d/b7276945398cc9272953d6811854418ce49939": "a0b4a089617095331984dc4916b1ca45",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/eaab0977dc072e2895bde9740f0befd3d4d5ab": "4be93ee7af59d06fe27ea104d50e7dfb",
".git/objects/22/ae0c4602c11b82206c350909ebc4688bd1daeb": "1e254fc43423d34907c558e2c54f6b09",
".git/objects/2a/c9832e68223410e9b05687c60225c326ba7b6e": "6b8aabcf73c27d66a7a51623fc0ddb08",
".git/objects/34/dd8866e4e4b5fdeaa73650739b271472862b1d": "c1057d95dd47f33ad955f1d6a46adf00",
".git/objects/38/ed74067d69ede97b045784e1efb4b556204c0b": "144eb33a55b45577ca648bcc216975e2",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/265be8862dbd1327708b076de6c0bc7e9043f5": "5b24c884848927891c140dd809a09a4a",
".git/objects/39/39db4c20afbcb142635f44b95d9b11dcca731e": "6d41e86fdcee75962180b4b79d05c291",
".git/objects/3c/72522771865d3aeef794e39c5d812bfe8e0adf": "92d607e69e80dbadf49cc90ac003c566",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/98c21d2cdb422c8f53c8452ef3c31da436e2c6": "c267e204b3b49f76979261bcb4c34bd0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/c79b3a9a173ddd308bc154b861acc54c5ba6d3": "b64bb1c11b482b7e05483079a0a55ad8",
".git/objects/45/eb1652f86d9e388a9585b09730f973d05b5518": "6689ce649b79c2ad08d1d16784030406",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/49ce8ac556207ab929de2d7d58fa726b25d655": "9ce35755ad485a12f8f551d6a0d7d9c6",
".git/objects/47/9cfa1240cc7462857f09d611a1904f2cd45c0f": "1505113005f64f2a9fc80522a8e01a41",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/d14da9fb9265c060c1158be3d42d6dad910216": "adec26a8259316a31d4d7fcac4991def",
".git/objects/4e/fa6dae38b8219484c6a16599f0c5fda37a82c6": "e7c2e3059ee61937ce3e0dd857d77f10",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/dfd9239496897114f597ad87f9b3ec3487d871": "dee275d1332b20b5c67b03990dd35ee2",
".git/objects/51/e2e6ad4c3df7c673d6c42faff92c3df31f37a5": "2db01eb7cf3fbb72d69da9e2f5c860bd",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/a3048c80587064a447232ab2313950b02950a5": "63454e6fff4d3480f04486f4432f5aae",
".git/objects/55/922dbc36348d4e749f80c2736849cbb31359b6": "8697783c88746610347a318d612a8290",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/a9677955cdbf881fc5b2d0465037cf77f02b06": "c7ff8b608e653a996b8e646e9b364ab9",
".git/objects/59/e272a05aeba5a360a70d35a6e79e1daa0e45bd": "26d7588519d36c969185ed2ca8f0f2e6",
".git/objects/5a/35bca46590bbcb3ed3368da71121adacc67fc3": "209cc276e78474f7e5a03834b100957d",
".git/objects/5d/54d266cb5290474e41533ccc233c2feebfdb69": "fc2d10f9f696e48a726e0c77d254e721",
".git/objects/5e/e2b22519c54de2785fe8b9e458cac3edc46ec3": "1822fe1e60ec78441993eff207c37bc0",
".git/objects/5f/972459c34f26033226dbc488efa46c0c700f88": "935b5514dc1eed45d68486764f96e7bb",
".git/objects/61/251bf0a41f9509d18f764b7e416e9b364b6961": "2ddaf6e849e94e6f1bdbdc636eae6499",
".git/objects/62/e6f0903f71f85a548204da55bc58abef6c2168": "a4ceb6e80894d2095a3185eb6cc3fe70",
".git/objects/65/3949780b2003387413a4c5d2908388d27ac0be": "4ee5c7ce258580cce90974b2f924bc7f",
".git/objects/66/0170caf4ac8216bb5d99607a6b516b1385f3d0": "3af9af1716b94fe553408e53442552f5",
".git/objects/67/26d37db5f010957713c9d15ce650402bfc73a4": "e5da0814498fa3a68f28ad0007a04a36",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/2f0e7388bb3ba296d38438a50b5fb484a43c74": "110af789f49ea58dacdc7fb0d30be581",
".git/objects/6b/0f6d037d24cdc6eea8fc8c896918361183a87b": "87504c18f3c645d8629b47a957b46d92",
".git/objects/6b/3d4e6c3e50105084363732370373c56090ea5d": "e3cdb351c16662d91f4256b5a7eb45a8",
".git/objects/6b/5555efb1d72b1f5f49357ef5536e04dfa777ba": "63d2707a8abceb873526d2c348ac3a31",
".git/objects/6b/6772ee144e8a8aaa9305918971ac2ddfc529b8": "eb3ab904ed047ad24e0a4789f7151293",
".git/objects/6e/5512315aa87962a6b6d2dbf00e1d526e70f26f": "bb8af88cd0e4e54e5b8f2bbf39768f99",
".git/objects/72/ca5001dd25139517928613365efb3b7b9622a0": "78bf86b7b12419eea7d282d1d99d080b",
".git/objects/77/262f53b67c295e6f15a712968c00a1ae5c0de3": "cb20a741bd9bf15fa5124f839815f111",
".git/objects/77/d54c94962f06e2d6e70737525be8d7e3986991": "27e01a1b0e148088f3dd849c1c376731",
".git/objects/78/d525319fb7e7ced7caaaa7aa50da78b5130fe6": "b9612551eac0a45a7489227f80e3f2c1",
".git/objects/7a/f269ce5dd4126cb0699b974bc65a1313496546": "b5eb99a6c83275f4f69bb4378380ea03",
".git/objects/7b/6de434f06501bbf1a58d62cce3525630abb8f7": "3998c30a45217cd88532e5dd42189543",
".git/objects/7c/1f8df932e711279ca93bde4224fca9efe8f4c2": "6c3a7bfacfaef58fa26c1fce899dcff0",
".git/objects/7c/ea19a399c1913f33b49a874e1c99056a21fb27": "7e0e95b077991c61d87d56bb3cf3b9bd",
".git/objects/84/0c6f9ac4189979f5ed8fc0418805b5c1432223": "e5ce701ef5f6f4240c40e77e0588b308",
".git/objects/88/663ca0489feba30d38db866b6f61fda1bf48ae": "c27fcd5e8868ccae058d7e8e0813f780",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bc4966063282876f0df377a796679b18fb7f41": "b138f01d7144e487a42a3dee8226ceba",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/2e3ccd02edea44603c279546235b1ac1ff7d9d": "2d9be92a271c2ebfb9706d23ed3fa898",
".git/objects/8e/727621079906ef7b149e6bb5de174c7f7694e3": "e360113f9f2a30f6a0045f19e4e0ef0c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/79cd7f8719caec01282aa5d30a7debc2ad8950": "303ff0e4bd7a63b37a88d5dbed138c2f",
".git/objects/98/97d744bf10caa30003cf9f453a96c240cde63d": "b0b81387dd42c2dd1b224ede7b7e726b",
".git/objects/9a/44cce383f4c7094226b07b97bc6a9c217c1661": "5536bfa05b9f9a464f646b37b5c84db1",
".git/objects/9a/8445714a513a667a932267afe3a7277ed949f1": "97e5c4500a7ba1a0aa45ef5556af0303",
".git/objects/9d/929f4fe5f8db18a2abfda4f85ee6abab754bee": "691f375a7f74590df357b103389d85b5",
".git/objects/a0/75e7edf5a561f4a91d0fff64cb4cd086cc7ad6": "ee7a447864a54047764eb12f4d491516",
".git/objects/a2/258311d2b31f5f8e7d1cdcdebb608b404ddf23": "96f7bfa35dc1235a454a2f778cb52f1e",
".git/objects/a2/57cb754c43b24d7f0246f209a01db41ddb2f99": "c71ff7f3e3ef904b0d2f9dd3acbe73b5",
".git/objects/a4/16d1fd07ec03aa6a48b6e23966b61642fea973": "05fc0069dc7cd312e774ae4539ab66d0",
".git/objects/a4/9bd939adb824a9143ae340a2129e16dea36dd0": "ae152fafae8ef7a21f493b9b197c96bf",
".git/objects/a5/d163487309767e2b3a6dccabb0475e4114955f": "3f201c4e2d2c141db8194aea21a18c39",
".git/objects/a8/05f9a0cd5d7b27a6fbea2fa853fe4711ea4fb6": "8be22da870e61827616d95ce8492a6d6",
".git/objects/a8/90cd846b534479e19a251db86190aa902963fe": "14db7f7434f45db33c324c1a800618b9",
".git/objects/a9/9390924f693b6daef4950abcb77225fcb5e998": "902f18d283ac084afbaa7458f69c2b33",
".git/objects/b0/f2b245393de7b1d428b08fb3258d3f21adebee": "65de2492a16a5c9a83ab7eb47b51c0dc",
".git/objects/b1/1a1efdc7d848239378e890cd9ee5bb39d43577": "96ff1c2c7e2d1a500eac3d67950c63c2",
".git/objects/b2/6ee254c88a468188b1546e8d4b434c07e43bf2": "0e8308cbf05afabe1a0c6f7e98e36d6d",
".git/objects/b2/fa268e53ff1e677080186536897273251347f8": "811a71fb9674dc126021f2f91c42ef60",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/b567b2fb6c83f8de4e8bd90a0d05f32d67116c": "3a22f90bf1192b7c2b070f71364233ac",
".git/objects/b8/db140a732cf20d046d20ec68cc0839b4a25f91": "cb8bf585eb5c23ce986ed754cc15d86c",
".git/objects/b8/fa04b03efeb03be21da84bb37ded6c3066228a": "eae5ebf23aa788a989c0754dc4f71917",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/c9ca3ce0117d9e408f8f8e429f3c20c3945ea5": "fd46fcf384c9679fe58fb91a973d0b66",
".git/objects/bd/3f92bf41a388ba2b204000c2be25aff8880d6e": "d86adbc0feee18848ce1a0ce55c96909",
".git/objects/bf/344b61e150736bc5d7427cc28b1e9d668ebd82": "224ab1fc4b057e27947f02352c744792",
".git/objects/bf/db68d0e2d6cf227748f6bf8b874b70348ddc4d": "5620010012b4b0eab9af911e34790134",
".git/objects/c0/13bd48ddc5448bfd328f6b1cab7a6d53f478c9": "5b388bc499304afcf0392c183372a9de",
".git/objects/c0/3ad5896ca2aa73e9c9358b443f2e8bcc24317e": "60e864cb244a4141738068726cb39e68",
".git/objects/c0/f51471780f32446fd9798de8a2ef8df5060ba4": "753b26991f08f41e5fe0b93e9be29d1d",
".git/objects/c4/9344db36719edce46eb5397fca645ad401eb54": "332b771dace6c9c1f305bdb39c9dcaf5",
".git/objects/c5/652d939ed362624de2d7cc048fa2d16a6dc00a": "766b84eaa0f9a0fd98a8b606fb722153",
".git/objects/c5/ba9cad77e2729061b648b9ba54656c00e58ca2": "5baa361c2e5a377db5845913f08077ef",
".git/objects/c6/231dec4826f44df060b60241740b2fdec6053c": "082c93011d64162dce3bb79d2a61a466",
".git/objects/c6/587bf5d48b9db6789e6ef9faf0e0c92c0660ed": "850bf4506d28e15d0c18a60d50393464",
".git/objects/c7/4f4c24321b6f0d58c51280ee234e007cbb79e7": "8ae43884655bcc82aa88bda1aa8a8416",
".git/objects/c9/08a7156039a98b96e5a67d500fb06f4d45ee70": "077da2cdf47e206dead6f51aa24e3e58",
".git/objects/cc/1be139a00647428c3551d4dbc031e8ee36ef47": "a766985d6a06cb72477235398a801f75",
".git/objects/cc/c0d450dbe944a097bafd536b280e67947e873e": "c3416a47aabf164ee77f73bb7d0cf8de",
".git/objects/ce/27e38fa3f036f42d8ae5edd05f93f05af3a53f": "876680f1f85bcd230008f5595d462dfb",
".git/objects/ce/997f506b8ed647071287d8b42c3905453cbfe9": "a431b0f5570147dc08f5335fbdde38ad",
".git/objects/cf/4288c97fae598fdd3ef7d33e341cab14d7de77": "ffea1325eb5c7208af88e07c11edf04a",
".git/objects/d1/4744cd18e9498b30d8048c2030cf71b6705e3b": "8badb580fdc10effced5c635bdfd6e8c",
".git/objects/d3/d553a8761b0848caf3e25434f86cf8d2407c51": "cc84fd9692b5e1cb9e28e84fb317b54a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/909a7208b9f7a429d5f07bd70bb32b99dca505": "92ffa5d96940ad99bbd0213eca8154a5",
".git/objects/db/a0128eb9e8b7a3fdec3735f319ec2feecf9dd4": "8c3d03b9bcbd5804589a6e3741763234",
".git/objects/dc/d7311e3174808c7ac2dec320c544bbb4d94a23": "09978f9b264f00e21cb7730d89bff426",
".git/objects/dd/8b2e844b09fe66dd9cd10ad1359185c7ce6ceb": "c25e1ecf46e47411de973f7c3756a7d7",
".git/objects/de/21f8af59efa9c3d85e6c1df603099a12a644c5": "0ba1e1c448f85cb0852e0f0badd6519e",
".git/objects/de/e35cca6943859c2a33ecdfe86fb0f386c43917": "dd8064fe4d85bdc722125f97cbfc3169",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e5/008c53f3f0af4fdef4c07d18d2594617ed1891": "b188c9ac7d24d70bc2a9a3095ab6d5c3",
".git/objects/e5/1ef0a670b315314d6f303eef5e53be48299dde": "6453c800bb74ecb652ed74e038374aef",
".git/objects/e5/5a7e76f5dfd4f8647dea636f89469d78f1e830": "6fdb8e0394693275248ed51a1e7347a2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/abc951a4ed082297cdfe10b3cef00ea6aca58a": "2d02219e1ac5f0fe81e774b393db8228",
".git/objects/ef/5f73a23e0b0489512d5c1e2e544f6de8168fb1": "c12ad09428a3b4e94a156aa9e5476900",
".git/objects/ef/60d90423341032f26fcb1ce21e272882a5e31a": "a20a323f3dea1ee96e653bb9f12593d9",
".git/objects/f0/956b2fe34b75a2c82491f90898da578b94f0e4": "ab8b68c7302880f49195a116a901a240",
".git/objects/f1/384578746c742e4c1b1a311bda4602455ee927": "860f99ef7ccc1514f106a2bfeed63fa4",
".git/objects/f2/eeb7e6dcecf3c40a4e6e6a9b3acb9acd789ff3": "d87ad790ea794c0de03c6bd4ec2576c6",
".git/objects/f7/09ccd8fdf5e21dc5b46e90c762f0a9f05724ab": "a431e01776747a9d6257cd1add0e0cd6",
".git/objects/fa/6421f7b63237d481223ec0270709a610f155a8": "f77071e8357266629f10349003adda9a",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fd/44e5aad2a9f12577891fc7935473500df0b092": "176b2f607cdd40a0899f92d76beb5552",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "d53606e728fa653270464f567b928e24",
".git/refs/heads/main": "8b53ca709b223e56b2c7c9da1324ff4d",
".git/refs/remotes/origin/main": "8b53ca709b223e56b2c7c9da1324ff4d",
"assets/AssetManifest.bin": "739711ee882bc2afb9a90bcd5ee1e299",
"assets/AssetManifest.bin.json": "ddda1ee3024baf4f898bcc2fcfa76834",
"assets/AssetManifest.json": "709cd75223bcda93d31f25cc5d972f8c",
"assets/assets/images/background.jpg": "e9e3d1035977d6b09dee0a50f435cb37",
"assets/assets/images/citypay1.png": "7d9a540bae7fdef4575472bf397e473b",
"assets/assets/images/citypay2.png": "bc489e615e39d3f6b66d91852da95ffa",
"assets/assets/images/citypay3.png": "e3ade24a412c4e27c15f24eb78bdae2a",
"assets/assets/images/citypay4.png": "441b8faddcacbc0e5774df2ff1a5e8d2",
"assets/assets/images/coding_background.png": "6ace6b2fe781377bf025f55162673da2",
"assets/assets/images/email.png": "e55d3ff1db29fa80ad1589ce2b79d32e",
"assets/assets/images/github.svg": "b004eeebed11276deebce8fb6191efcb",
"assets/assets/images/hei1.png": "2b4a99f67c41521a30e159c3f18e8be0",
"assets/assets/images/hei2.png": "bce0337b8d3bd559d1e214211826afca",
"assets/assets/images/hei3.png": "4c82452e98d2e1b8effcf26ba48be4c2",
"assets/assets/images/laptop.png": "27656094f2060a3da9414da98adda24b",
"assets/assets/images/linkedin.svg": "1666c203dd56fe12ca484fbb884cd0a4",
"assets/assets/images/ntpay1.png": "4f4b8c8feb2b1e957f4b2ac07a719d5a",
"assets/assets/images/ntpay2.png": "0c9c98daf49f3d027436c7fe05755212",
"assets/assets/images/ntpay3.png": "0a34658da753e2ccf4a57e83c757b2a5",
"assets/assets/images/phone.png": "06d120a87a4b8359ce72297068544b66",
"assets/assets/images/profile.jpg": "c591a16180eff6107d8d9fd78594da07",
"assets/assets/images/verified.png": "4210e74e15219af770a6384b606102ab",
"assets/assets/lottie/developer1.json": "882ff9f767ce1977995926d06efa596b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "7efc835aea39f0e8ac545af16b977b13",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "25468e15c175a9c931b64858a6fa13f3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3051bc2a23d06197ecea9f22eb004661",
"/": "3051bc2a23d06197ecea9f22eb004661",
"main.dart.js": "13689ca21cbb63c8e26b371105f34bf2",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
