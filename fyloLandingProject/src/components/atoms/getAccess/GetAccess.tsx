import InputElmenets from "../inputElements/InputElmenets"
import TextContainer from "../textContainer/TextContainer"

const GetAccess = () => {
  return (
    <div className="bg-[#575988] py-[80px] pl-[80px] pr-[120px] mt-[320px]">
        <div className="flex justify-between">
            <div className="w-[533px]">
                <TextContainer
                    hText="Get early access today"
                    text="It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you."
                    fontSize="text-[32px]"
                    color="text-white"
                    margin="mb-[17px]"
                /> 
            </div> 
            <div >
                <InputElmenets 
                    placeholder="email@example.com"
                    styleButton="mb-[16px] w-[500px]"
                />
            </div>   
        </div>   
    </div>
  )
}

export default GetAccess