import Link from "next/link";
import {
	SiWhatsapp as WhatsApp,
	SiInstagram as Instagram,
	SiYoutube as Youtube,
	SiFacebook as Facebook,
	SiGithub as Github,
	SiX as X,
} from "@icons-pack/react-simple-icons";
import { Mail as Email, Globe as Other } from "lucide-react";
import { newReadonlyModel } from "@mvc-react/mvc";
import {
	ConditionalComponent,
	ModeledVoidComponent,
} from "@mvc-react/components";
import { JSX } from "react";
import { SocialLinkModel } from "../../model/social-link";

const SocialLink = function ({ model }) {
	const { details } = model.modelView;

	return (
		<Link
			className={`hover:text-[#DCB042]`}
			href={details.link}
			title={details.type}
			target="_blank"
		>
			<ConditionalComponent
				model={newReadonlyModel({
					condition: details.type,
					components: new Map<typeof details.type, () => JSX.Element>(
						[
							["Facebook", () => <Facebook className="size-4"/>],
							["Email", () => <Email  className="size-4"/>],
							["GitHub", () => <Github  className="size-4"/>],
							["Instagram", () => <Instagram  className="size-4"/>],
							["WhatsApp", () => <WhatsApp  className="size-4"/>],
							["X", () => <X  className="size-4"/>],
							["YouTube", () => <Youtube  className="size-4"/>],
						],
					),
					FallbackComponent: () => <Other className="size-4" />,
				})}
			/>
		</Link>
	);
} as ModeledVoidComponent<SocialLinkModel>;

export default SocialLink;
