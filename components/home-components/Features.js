import {
  DesktopComputerIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  EmojiHappyIcon,
  FireIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Lightening fast Profile Creation",
    description:
      "Create your Profile ReadMe in just few clicks ! On an average, it takes less than one minute to create a perfect Profile ReadMe using GPRM",
    icon: LightningBoltIcon,
  },
  {
    name: "Add all Social Links",
    description:
      "We have added an option to add your Social Links to increase your reach and promote your works at one place.",
    icon: GlobeAltIcon,
  },
  {
    name: "Flex Your GitHub Stats",
    description:
      "Be Honest, everyone loves to flex their achievements. With tools such as ReadMe Stats, Most Used Languages, Streak Stats you can show your achievements.",
    icon: ChartBarIcon,
  },
  {
    name: "Show Your Tech Stack",
    description:
      "Select from over 300+ tech options and show your tech stack to everyone, Let them know what makes you awesome.",
    icon: DesktopComputerIcon,
  },
  {
    name: "Visitor Counter",
    description:
      "With the use of Visitors Counter you can see how many people viewed your profile, this gives you an idea about how popular you are on GitHub.",
    icon: UserGroupIcon,
  },
  {
    name: "Let people help you with Donations",
    description:
      "No matter what your aim is, money is required at some point to boost the process for getting closer to your aim. We give you an option to add Donation Links directly into your profile so that people can help you by donating.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Fun Components",
    description:
      "If fun is required everywhere, how can it be missing from your profile ? Now, You can cheer up other people by adding Random Memes and Quotes in your profile.",
    icon: EmojiHappyIcon,
  },
  {
    name: "GitHub Trophies",
    description:
      "Got any trophies/medals but oops! how can you show them on your profile? Don't worry, GitHub Trophies are the virtual trophies for you. Showcase them by adding it to your profile.",
    icon: FireIcon,
  },
];

export default function Features() {
  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-300 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold text-green-200 sm:text-4xl">
            We got everything that you need !
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Create your perfect GitHub Profile ReadMe in the best possible way.
            Lots of features and tools included, all for free !
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-300 text-zinc-800">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-green-200">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
