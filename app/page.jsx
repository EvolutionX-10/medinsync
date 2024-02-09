import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <div className="ml-20">
      {/* Navigation */}
      <div className="flex items-center justify-between mt-4 ">
        <div className="flex">
          <Image src="/app/favicon.ico" alt="" height={50} width={50} />
          <p className="text-[#0075FF] text-2xl">
            Med<span className="text-[#7BEE8D]">In</span>Sync
          </p>
        </div>
        <Link href="/login">
          <button className="rounded-3xl ml-0 mr-20 bg-[#0075FF] px-16 py-3 text-white">
            Login
          </button>
        </Link>
      </div>

      {/* Text1 */}
      <div className="flex flex-col gap-4">
        <p className="w-1/4 mt-20 text-3xl font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <p className="text-[#0075FF] text-6xl font-bold">
          Med<span className="text-[#7BEE8D]">In</span>Sync
        </p>
        <p className="w-3/5 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit.{" "}
        </p>
      </div>

      <div className="flex mt-24 justify-between mr-20">
        <Image
          src="/app/favicon.ico"
          alt=""
          height={250}
          width={250}
          className="h-[40vh] w-[30vw]"
        />
        <div className=" text-right">
          <p className="text-4xl font-medium">
            How does MedInSync helps Hospitals and Patients ?
          </p>
          <p className="text-2xl w-[50vw] mt-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
            urna. Pellentesque sit.
          </p>
        </div>
      </div>

      <div className="flex mt-40 justify-between mr-20 flex-row ">
  <div className="text-left">
    <p className="text-4xl font-medium">
      How does MedInSync helps Hospitals and Patients ?
    </p>
    <p className="text-2xl w-[50vw] mt-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      Aliquam in hendrerit urna. Pellentesque sit. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
      Pellentesque sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit.
    </p>
  </div>
  <Image
    src="/app/favicon.ico"
    alt=""
    height={250}
    width={250}
    className="h-[40vh] w-[30vw]"
  />
</div>






    </div>
  );
}
