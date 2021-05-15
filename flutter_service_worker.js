'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ccc73cc410271b0d277c8b7622c3d417",
"assets/assets/html/career/Charted_accountant.html": "51687bb939fc0eaaea4a737505385229",
"assets/assets/html/career/Career_in_Bsc.Agriculture.html": "cc6504042f6e37918b1693468e4939fe",
"assets/assets/html/career/Career_as_an_Army_Officer.html": "e15c96fae5d002e5677d6b2c4785e96c",
"assets/assets/html/career/Judge.html": "1a2196d966f5abd33233f7bc3f111db2",
"assets/assets/html/career/Police.html": "1698fa34bc96e17dee4943ddf157e786",
"assets/assets/html/career/Career_as_a_Central_Reserve_Police_Force.html": "57ee324840c09e53760759ebd0c57677",
"assets/assets/html/career/IAS_.html": "a9b9ecb72ebe1f0631af1d0fb4530b98",
"assets/assets/html/career/images/Career_as_a_Scientist_html_e5c4db9aee09a043.png": "c3ede315e8957cdc78a7641bb5dc7add",
"assets/assets/html/career/images/Career_as_a_Scientist_html_cc702fc3ada6ff03.jpg": "0c359522c8a7f7b866970fd35adbbf9e",
"assets/assets/html/career/images/Career_as_a_Scientist_html_64322f7105de46b5.jpg": "25269a045c97a13cfad2edbaaf97e6a4",
"assets/assets/html/career/images/CAREER_AS_A_TEACHER_html_db4866176c725237.png": "55ad861e021011e9473f86c40de9e71a",
"assets/assets/html/career/images/Career_as_a_Scientist_html_b877cba1f16d952b.jpg": "17ea159bb13d75a6e59cebd43f9f5c4a",
"assets/assets/html/career/images/CAREER_AS_A_TEACHER_html_4f081ba760ca0628.png": "1ad8e62688902a28dd4198975bb886e7",
"assets/assets/html/career/images/Career_as_a_Scientist_html_506c91846daa3012.jpg": "f96fd5ab1842f2c202d4d09d8b75f30d",
"assets/assets/html/career/images/Career_as_a_Scientist_html_661416f22de9194c.png": "63abe224d4dbcacff5e57270035daeb2",
"assets/assets/html/career/images/Career_as_a_Scientist_html_570c0767884bfea8.jpg": "da1d981e633c2ac4a9030ca25d0d2b23",
"assets/assets/html/career/images/Career_as_a_Scientist_html_b5dab80ef1ae5b79.png": "89ab0025aee491e3056fe96d50604ed1",
"assets/assets/html/career/images/Judge_html_b2cda45f4baa2fff.png": "eb73e035ca8d3506b43d97bd2c5eb477",
"assets/assets/html/career/CAREER_AS_A_TEACHER.html": "9b5132504fdb3edf9ca81b85251059dc",
"assets/assets/html/career/banker.html": "5be92a2ecbebc18b918dae0df13a8454",
"assets/assets/html/career/Career_as_a_Professor.html": "c4ddf6829da228d1de3988656ff31fe6",
"assets/assets/html/career/Career_as_a_Scientist.html": "bc20bf8386db7f28653dabe157df54aa",
"assets/assets/html/career/Doctor.html": "637b8f6920ee3f4c73a57b9d427267ee",
"assets/assets/html/career/ENTEPRENEUR.html": "b6c4bca9b9d209c4d5404c2b5d87f1e8",
"assets/assets/html/career/Education_after_10th_to_Degree.html": "f69697274a32699c746bd8ff453409f7",
"assets/assets/html/career/Career_as_a_nAir_Force_Officer.html": "6fec2f56b8b6d827867bffd6b62bf600",
"assets/assets/html/career/Engineer.html": "c1bd98d13949fc9c070e3674de7d5b6c",
"assets/assets/career_db.json": "8324f915151bd148b7b72886ae7487ba",
"assets/assets/career_paths.jpg": "710e6779865c1d759c162b6aa8280c7a",
"assets/assets/education_db.json": "1498f83864156fd0e0a62a774084e64d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "a74670dd149e5f7839c996ac33e7fdbb",
"assets/NOTICES": "b9b3c4164e95d2b757a44c64e114d00e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"manifest.json": "84193c0027defc404bd488fd0aac7e0f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/heads/main": "584d0f075f9418970d0947062f742443",
".git/logs/refs/remotes/origin/main": "ae9695e543e4e13e930c5c5ca6cb922c",
".git/logs/HEAD": "f4843acca55bd449c3b7f1310fb2de47",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/7f/d2bc1ae27e179cf808aa3ab84bd028384e5df7": "96a91a993be57bbc587ae96e071c1772",
".git/objects/54/aee8803a48d54794b3537bb37b69df2327b927": "e286aeb0425f1408b69b7d04ea30fa70",
".git/objects/0d/3cfc05818f80f4739a7db078b5e0103bd7c8dd": "9ec28b8bb3f9603f7303fb30233c146f",
".git/objects/cf/588709dc6a1429e17ae5c753437305e25b8fb2": "8b0516e26c2e61851906a92ad5fca7fe",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/9e/ac8c8c637f99013ba816ba5869bb8696aadffd": "3a06051eb13bcedd367430ceb11b64e9",
".git/objects/9e/9e897b135e58303de037173fc870b5e445c41e": "74334160bdba2bd0f5b88fb037264f11",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/d9/1beee43d159d2e595529b09708dce5eb8abfa2": "7250dfebd902f1afefc416ae91d22c2f",
".git/objects/85/fdf257e388393bb50a813cd4213483559f5af4": "c88187488960f74d623c008acb8411e0",
".git/objects/7b/f00fa4cdd6d537fd3b9c6512cd37e6d4393f53": "1232dcb6e87bd687bdd3bb745adeebd0",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/30/66319287e23e0b860f34f85bb51e700bbe9c06": "c47371566c9319e964741c2d418b6f19",
".git/objects/e6/3f2d847f1dbf93846a93689d3d2cf20248d312": "7c62f615659911ffcf856d3a2eef5936",
".git/objects/e6/dffa8aff68ad0f849496fea2043fc863c5b9e9": "339178035b61b2fe19849fe4efd79d53",
".git/objects/b6/e4c4fb340825b7568bdb8e1d0904c047b2c944": "9485b1b9a42d143cd9f847784c77cda3",
".git/objects/73/74f7d3c0a9b13ef95a9e627df42473a7c0a909": "319745cc990f1d98afb6b40212843c34",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/42/1595a2bb4d2993aead43ea9252de9e383c9bab": "6aebe0b3cd771f5e9d0dc2175887e626",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/f2/d82e026caf85acb8b113e066e4a1397087c0ef": "e9b8093c79af7fa321f9a306f9bb20e5",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/bd/dd7702251b647f8dd5e927767db9eb9f8da1e5": "559c9364e2ad715b93660a1d72238c2e",
".git/objects/0f/3fd09ae8a0cd535081718f20eaae0fd4363ef7": "e62c6b64880fc256a98c9f2669001de4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/3f/a56633ce1ee88deaa567bf94fb924d640c92f8": "369d63c2748e1e754733e5c49f938ee2",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/41/709a8dfadb029a6e44523b26c99b37b8d37507": "c5580583580dd063d4d237da985ba27c",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/64/c00bed8c1634ebc7bdb2654241a14fd4c0afb9": "53c8e10f4bf3d5046a463db310cc4d6d",
".git/objects/d7/66bdec57d25119c69b63a6c0035e848b407567": "a917630ebc917fa65f2dd9696a52ca0b",
".git/objects/1e/d12f3e7389fa5509ff1a54368b0b2838d334e0": "ce5703afb0241f1fd75ce8a6d986587d",
".git/objects/3e/32c5a94193e28b9b61d873a5272d8556e72609": "a5ade75a2f2ee86d8e2ecb263aa912e0",
".git/objects/ea/f742de9428629f0421181c0467398047e5f986": "7ee70116dd59e7d89573233ba46a6793",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/19/f33e67e85454737082da0fb65ec4a40a43d2f2": "90e4bfcb9727cd0be5227702e5671434",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/06/72f1c6d1a5c12b4afea4f9591d5d974d31dcd7": "5dfd4a14baacc234c7f8a008b2162b52",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/03/0c03732efc1f5237273bcc1311ee3304949860": "65c289465bb52e2e482b7062b9467887",
".git/objects/d3/792fdfd4084a102dedd74059fa4efa54c61264": "ac4fe8c5e24b8e2e035691c269ccdf89",
".git/objects/d3/3837ae848518bf667c128d83cbdbe9a8f868b4": "b6c9397df271831485ae3400ed8df0b2",
".git/objects/16/b3309cccad4ac6edff4ba9eb56e552d5b164e7": "e8e27f06203b79cb5ca45a1a46ce87ba",
".git/objects/a6/7d0709b2db022662c264cac460adbb8e4136d2": "79e589c7c87e887acc8132ac1faf8088",
".git/objects/5c/cf6aaaab92afdfad0d0a57d3e2d936c2bfba3e": "d98773d51a49e858a31c70efefa76b17",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/ee/ed151751c1295914782a4dc71086a5af0e015d": "ba0cc05369d6a1c9ea2f1b877495bc8e",
".git/objects/47/622a9c37be943d3b892dd9357a6be0dad18df0": "b0d497b07025b4b2e79aaf85ee7d3b15",
".git/objects/bb/372c5f1656613e7e019a198fd2fa0eadfd7321": "bec9412b4ca178ff3b71394dcbe33ee0",
".git/objects/9c/f5ffa54a4e01a6fb8609db3268d4d583c9ba48": "58b1fdb0626b008912d60d6dd32d43bc",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/78/2e324b2ba6c08667e54fa7c2c5588743ae1f9c": "e0ccafe1e0bf91184d72370a41650fc6",
".git/objects/31/8c6920347db5a470f4d3ddf3de609e0b2d0232": "2a61b7c33f89478c4c6b27b069c995b5",
".git/objects/ac/7687d53660d790a886502737fcd44cf9ea9b47": "967a701ebc965a4a8e043ee8b378bad8",
".git/objects/52/8cf1f3a418a9213984a597b6c3e20c9f64b01b": "39a818e1c167667532a45a17e0ed1588",
".git/objects/52/ccf8fdf728c326b9e64ff585ac08d8241a782e": "285b3eb4988814f69c1a8998d9431bbf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/59/ae0f600dd2f10d81b522f2d24577ff1b354e20": "73101b12ccb80b180a0f89d087e2a238",
".git/objects/0a/b6cf884625ddd09e73de88c8b333734bc9cb28": "f30de4a92dcedb3f36821df5ddaf7767",
".git/objects/96/21177481cb1a963b7641744469d296fdd479b3": "033406bd068b6d016e78a3e33799e7cb",
".git/objects/98/8ed0d3236effcb3eff606258873640b130044f": "e98b72a23b8be45e2c25dac6ec6f5294",
".git/objects/d1/2469875af54ef281b6d36bdc98ab45d64b717e": "bca89ac976dc698a60bc94779351e4b4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/99/d24e588dc739a34175ef8c4fcb1dc65cc3663a": "72337360d6752a7cef766d3e341f4018",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/17/adf4fcdf28ed4bfc01913836fb7692a39171b8": "7ea836581bbf40649838ef83ef7e2f35",
".git/objects/2c/41f9fa4d97c5671fff89ccb88bc8865fe02003": "a51fbf3bab437b5e9d60bf16206cad29",
".git/objects/2c/451c879f49feadb5910122743fb5c9a0e27a70": "c02c3def29c77dc62faa43aeff458092",
".git/objects/be/013525cb61ec3e23151cec6f777aedc2d1bd57": "18cf7d497281844aadad493480978fa2",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/df/82569e0e70b16eb46db14c49d65eb1efe33cac": "3c0928d32caacb397bdc2dc1415fa92a",
".git/objects/09/b0f76a90db29c47dd390f37af43cf6c817af78": "72859f54b507b42d1b62b1a379a798f3",
".git/objects/09/f87a26975ff9a560f413b75fca18559af2645b": "4e6b358e3d272639abfd109e9504a5aa",
".git/objects/e3/2f3df507d879f99d66fb36c32f018dfc348ee8": "be02c1a5883d6c2db0a4c7868d9788a2",
".git/objects/f9/d7c3cd2ee397a17625b051db44d73932267128": "58570abef1fa6e62a48ff263a5e61afd",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/01/afe7fce31b358dbe95ccf7dbfde64ffce0ce0e": "d3850aefe2ddcdc222f96f8540b03e93",
".git/objects/f6/e70f9df9658ff7da847c88297df13db59698ff": "d2971820d4d38373141abf2a1e3b5257",
".git/objects/33/06a12dfdf33a6e80b981e5bce5a35c3ef80679": "9c3213f51f3a193dc526777efd57dbfc",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/33/13d918b160f55bcf0331b5cf7a354beecb22b8": "136158b98720da1d57a7181fb2f22472",
".git/objects/0c/73daed9c17194cd34adfeec5747bb1cae7b5e5": "5e0936c97ab9eb6881837c12185d9723",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ec/ca1241f101a3bd5b24ed738344a9b465ea2ba9": "2b0d4800bc476d3242eeb8570f3af014",
".git/objects/82/163e904a8399212cecce960677a0b66dfb0f41": "c7ed58cf9b2e7d58d685bbce7ee67919",
".git/objects/bf/b45fe19975abe2c6c239796ec548f7a737ce4a": "7c127d5ab5d82a849a97fe430bc738c5",
".git/objects/b4/91da4a70939c2a02875a62cabd96be7acae56a": "aa9a3a5579bb801b2fb0db439bf08230",
".git/objects/9f/a46fafc2e4f00aaf8f4550f11456eecee7f2fd": "0c5289f0ae68cd222c8cdaf34fbaef66",
".git/objects/32/317d4684f35a890961b034d891c06158eeb204": "da2e6dc722cd281d4f59b3a96d6a389b",
".git/objects/9b/b15588ea04aae6953e25d5a7dde0c1ffc6a0c4": "ed49b456a372898a9c29a77ddd7245c8",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/c0/15bf13d4b43673d5f21de3516975bcbd041cfe": "efc474a69b782b7c66ef8fe92ad2d5a9",
".git/objects/8f/db6df318ef93d40ef3f54bcd112e2b04997a88": "3c1daf485ccbe2c3d9b24f85251bca2e",
".git/objects/7c/3e2ddc6a620205bc84415b57d9ab5d1dc6b3af": "f5a3105f7ed6f6043dc278d9ad3cec53",
".git/objects/37/072a8caf9a3d6728a67c704093cf3e16dbd799": "56e7a7f369100d2f743b9ed43b90c52f",
".git/objects/b1/a566ebeabf4f2d94f5b49692e739ff9520161c": "92f798f2512256d58ed64c92fbcf0230",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/index": "ae606bbfa04e170a4b4673f31f206169",
".git/COMMIT_EDITMSG": "7844a93ad4b97169834dade975b5beff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "ae33a462ee1689a075ddfb2ccfe62302",
".git/refs/remotes/origin/main": "ae33a462ee1689a075ddfb2ccfe62302",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "81665f89c03e6cef03b00cb2676e19ee",
"main.dart.js": "6c620e5d228c5e694ed4f6bd9ec5ded1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "d55e74d707c7c4f72a5d89f3eca2ae56",
"/": "d55e74d707c7c4f72a5d89f3eca2ae56",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
