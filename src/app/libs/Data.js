import golap from "../../../public/assets/golapgram.jpg";
import lotkon from "../../../public/assets/lotkon.jpg";
import mababa from "../../../public/assets/mababa.jpg";

import robi from "../../../public/assets/robi.jpg";
import pita from "../../../public/assets/pita.jpg";
import veg from "../../../public/assets/veg.jpg";

import banana from "../../../public/assets/banana.jpg";
import papaya from "../../../public/assets/papaya.jpg";
import malta from "../../../public/assets/malta.jpg";
import pomegranate from "../../../public/assets/pomegranate.jpg";
import watermelon from "../../../public/assets/watermelon.jpg";
import strawberries from "../../../public/assets/strawberries.jpg";


const projects = [
  {
    id: 1,
    name: "গোলাপ গ্রাম",
    address: "সাহদুল্লাহপুর, সাভার",
    description: "পুরোটা গ্রামটাই যেন গোলাপের বাগান! উঁচু জমিগুলো ছেয়ে আছে মিরান্ডি জাতের গোলাপে। লাল, হলুদ, সাদা—কত বর্ণের যে গোলাপ তার কোনো ইয়ত্তা নেই। যতদূর যাবেন গোলাপে ঢাকা চারপাশ আপনাকে মুগ্ধ করে রাখবে। সকালের শিশির ভেজা গোলাপে নরম আলোর ঝিকিমিকি। গ্রামের বুক চিরে চলে গেছে আঁকাবাঁকা সরু পথ। তার দু’পাশে বিস্তীর্ণ গোলাপের বাগান। ফুটে আছে টকটকে লাল গোলাপ। গ্রামে ছড়িয়ে পড়েছে গোলাপের সৌরভ।",
    photo: golap,
  },
  {
    id: 2,
    name: "লটকনবাড়ীয়া",
    address: "শিবপুর,নরসিংদী",
    description: "লটকন মানেই নরসিংদী জেলার শিবপুর ৷ লটকন আমাদের সবারই প্রিয় ফল কে না পছন্দ করে, যারা সারাদিনই কাজে ব্যাস্ত থাকেন তাদের জন্য ১ দিনের খুব আরামপ্রিয় একটা ভ্রমন৷ লটকন বাগানের পাশাপাশি অনেক কিছু আপনার মন ভরে দিতে পারে বিশেষ করে মাটির তৈরি বাড়ি, চারিদিকের শান্ত পরিবেশ এগুলোতো আছে তার পাশাপাশি নানা ধরনের ফল তো আপনাকে অবশ্যই আকর্ষন করবে।",
    photo: lotkon,
  },
  {
    id: 3,
    name: "মা বাবার এগ্রোফার্ম লিমিটেড",
    address: "শেরপুর সদর, ময়মনসিংহ",
    description: "প্রায় ৮০০ একরের বিশাল এই সমন্বিত কৃষি খামারে একই সঙ্গে উৎপাদন হচ্ছে মাছ, হাঁস, মুরগি, গরু, ছাগল, বিভিন্ন ধরনের ফল ও সবজি। বর্তমানে বাগানটিতে মাল্টা, কমলা, আঙুর, ড্রাগন, লটকন, পেঁপেঁ, পেয়ারা, লেবু, কুল ও সৌদি খেঁজুর, এভোকাডো, ছবেদা, মালবেরি, ত্বীন ফল, আলুবোখারা, ভিয়েতনামী নারিকেল, কিউই, আনার, থাই সরিষাসহ আরও ২৭১টি জাতের ফলের চাষ হয়। এছাড়াও খামারে রয়েছে না প্রজাতির হাঁস-মুরগী, গরু-ছাগল এবং কবুতর। শিশুদের সাথে নিয়ে পারিবারিক সময় কাটানোর জন্য একটি আদর্শ স্থান",
    photo: mababa,
  },
]

const projectBenefits = [
  {
    id: 1,
    benefit: "যাতায়াতের জন্য নিজস্ব রেন্ট-এ কার সুবিধা",
  },
  {
    id: 2,
    benefit: "অভ্যর্থনা,রেস্টরুম ও কটেজ সার্ভিস",
  },
  {
    id: 3,
    benefit: "সুপেয় পানি ও খাবারের সুব্যবস্থা",
  },
  {
    id: 4,
    benefit: "কৃষিখামার থেকে সুলভ মূল্যে কৃষিপণ্য ক্রয়ের সুবিধা",
  },
  {
    id: 5,
    benefit: "শিক্ষাভ্রমণ বা পিকনিকের সুব্যবস্থা",
  },
]


const events = [
  {
    id: 1,
    name: "রবি উৎসব",
    address: "সাভার,আশুলিয়া",
    description: "আমাদের এই উৎসবে পেয়ে যাবেন শীতকালীন সকল সবজির এক ব্যাপক সমাহার।সারা বাংলাদেশ হতে প্রান্তিক কৃষকেরা তাদের উৎপাদিত কৃষিপণ্য ,কৃষক পত্নীর তৈরী গৃহস্থালি পণ্য,মৌসুমি ফল নিয়ে হাজির হবেন আপনাদের সামনে।কৃষক পাবে প্রাপ্য মূল্য আপনি পাবেন নির্ভেজাল দেশজ কৃষির ছোঁয়া।",
    photo: robi,
  },
  
  {
    id: 3,
    name: "পিঠা উৎসব",
    address: "নতুন ক্যাম্পাস,জগন্নাথ বিশ্ববিদ্যালয়",
    description: "বিশ্বের সবচেয়ে বড় পিঠা উৎসবে আপনাকে স্বাগতম।পিঠা উৎসবে গিয়ে পাবেন ভিন্ন ভিন্ন স্টলে সাজানো  নানান রকমের পিঠা-পুলি। থাকবে সুইচ রোল পুলি, চন্দন কাঠ, সুজির মালাই চাপ, ম্যারা পিঠা, নারকেল পুলি পিঠা, দুধ চিতই, ভাপা পিঠা, ফুলঝুরি পিঠা, সেমাই পিঠা, সাগু রিং, কেক, গোলাপ পিঠা, ডালের পিঠা, পুডিং, দুধ মালাই রিং, দুধ সন্দেশ, নারকেল চমচম, তেলের পিঠা, নারকেল পাকন, নুডুলস পিঠা, চুষি পিঠা, সাজের পিঠা পাঠিসাপটাসহ ভিন্ন স্বাদের বৈচিত্র্যময় পিঠা।",
    photo: pita,
  },
  {
    id: 2,
    name: "মধুমাসী উৎসব",
    address: "সারিঘাট,কেরানীগঞ্জ",
    description: "আমাদের এই উৎসবে পেয়ে যাবেন গ্রীষ্মকালীন সকল ফলের এক ব্যাপক সমাহার।রাজশাহী,চাপাইনবাবগঞ্জ,দিনাজপুর,বরিশাল সহ দেশের ৬৪ জেলা হতে উৎপাদিত মৌসুমি ফল এসে হাজির হবে আপনাদের সামনে।সম্পূর্ণ অর্গানিক,নির্ভেজাল,বিষমুক্ত ফল পেয়ে যাবেন সুলভ মূল্যে।",
    photo: veg,
  },
]

const eventBenefits = [
  {
    id: 1,
    benefit: "যাতায়াতের জন্য রেন্ট-এ কার সুবিধা",
  },
  {
    id: 2,
    benefit: "অভ্যর্থনা,রেস্টরুম  সার্ভিস",
  },
  {
    id: 3,
    benefit: "সুপেয় পানি ও খাবারের সুব্যবস্থা",
  },
  {
    id: 4,
    benefit: "সুলভ মূল্যে কৃষিপণ্য ক্রয়ের সুবিধা",
  },
  {
    id: 5,
    benefit: "নিরাপত্তার নিশ্চয়তা",
  },
]

const products = [
  {
    id: 1,
    name: "Watermelon",
    price: "130.00",
    photo: watermelon,
  },
  {
    id: 2,
    name: "Pomegranate",
    price: "230.00",
    photo: pomegranate,
  },
  {
    id: 3,
    name: "Banana",
    price: "130.00",
    photo: banana,
  },
  {
    id: 4,
    name: "Strawberries",
    price: "150.00",
    photo: strawberries,
  },
  {
    id: 5,
    name: "Orange",
    price: "130.00",
    photo: malta,
  },
  {
    id: 6,
    name: "Papaya",
    price: "180.00",
    photo: papaya,
  },
];

const FAQ = [
  {
    id: 1,
    question: "Are there any discounts for group bookings?",
    answer: "Group consist of more than 5 numbers will get 20% discount."
  },
  {
    id: 2,
    question: "Is there parking available for visitors?",
    answer: "Yes,but it will charge 20 taka for bike & 50 taka for car."
  },
  {
    id: 3,
    question: "Are there guided tours available?",
    answer: "Currently not available but receptionist will help you by providing information and others."
  },
  {
    id: 4,
    question: "Can visitors bring their own food?",
    answer: "No,why you need to bring your food when you can get fresh organic and delicious food from our kitchen."
  },
  {
    id: 5,
    question: "Are visitors allowed to take photographs or record videos during the tour?",
    answer: "obviously.There you also get photography corner and on payment DSLR service."
  },

]


export { projects, products, events, eventBenefits, projectBenefits, FAQ };