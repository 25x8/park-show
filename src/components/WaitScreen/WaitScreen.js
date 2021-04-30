import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectSortedWinnersIds} from "../../redux/feature/slices/winnersSlice";
import {Carousel} from '3d-react-carousal';
import background from '../../assets/images/background.png'

import AliceCarousel from "react-alice-carousel";
import {WaitScreenSlide} from "./WaitScreenSlide";


const WaitScreenBase = ({className}) => {
    // const winnersIds = useSelector(state => selectSortedWinnersIds(state));
    const winnersWithPhoto = [
        "3c5e2c32-00f5-4b4c-89bb-7b5e5606adc9",
        "156f9139-be90-413d-b1dd-da7285677528",
        "cd9e2330-6d10-4d93-a848-f74ae72ba274",
        "15b4cb09-77e0-4d30-906b-19021918b243",
        "0d6c7d6d-5d03-4496-bd2f-da020934f562",
        "2e0d31b3-6475-4fa9-84d5-cd59d1161194",
        "03590408-486d-4ea0-ad5e-66d8391267ce",
        "41e4faee-70f6-43a8-9066-75701b027d31",
        "e74984c4-8d7a-4625-9606-bc50369b920f",
        "2e4a80e1-a43e-4c17-925f-f65b56029d4e",
        "c8732563-be07-47ea-9268-7df0ffebe46d",
        "56410c0d-e626-4d4c-ba69-63ac3e2d509c",
        "f86a58f3-1701-4adf-8b0a-466342160029",
        "e790c871-3187-42f5-a810-e420fee83707",
        "fb47187f-6e36-42d1-831f-0a93329441ed",
        "db9ad098-5652-4d99-9daf-e0b063118761",
        "a1461433-e1b5-4912-a4d8-fadda9db533b",
        "8e5dd06a-e540-49fc-9783-c408ad187343",
        "220a7ac9-5027-48fb-8308-99ee8d3fe615",
        "dd975481-3754-4600-b0a8-559ad090407c",
        "951e82b7-b1be-4029-8c90-8b605d77d093",
        "88fe3141-3098-47d9-9dfb-2cde6fa04014",
        "f5ef9ba4-98f0-4519-8534-73fcef30a2df",
        "262fe886-797c-4faa-8782-45e6955ae482",
        "93ee1399-1fd5-4ae0-877c-a1f1d16aaeda",
        "e3f601cb-8d84-47d5-99fe-a0e23c202460",
        "1710795e-871f-40d5-b13c-0862c40d3b0f",
        "e88c3d3c-cf6d-449a-bf73-3196340f2ab7",
        "1a37cb9a-f736-4265-9690-2457bc8e85ec",
        "05925018-fe34-47af-a785-28e35a709c6b",
        "7e5db973-8702-4fea-98fc-26bbaab4abb2",
        "b8885e2c-0fbc-4baf-86f1-d2219c2d6cef",
        "6bd79777-f585-498c-8dc7-0af98a3bf8b3",
        "6dceb7a0-7a57-4a7c-a7c0-982ab1a10801",
        "20243d32-c5be-4ad9-959b-4efb2a858833",
        "fbe45b8b-3368-4e79-b937-332442692306",
        "a327d1e1-1279-4565-a0a2-57313e836502",
        "77ced300-2dcb-4588-9036-92f036951cf9",
        "6b1b9fbb-9f07-49ed-b7a6-1e277df3a4e3",
        "e72e43af-5395-49d9-b244-4177659c9e63",
        "27438717-78d4-474d-a2bc-d5e56945c5bd",
        "5bc480b1-0446-49fa-8bd6-d5017a07c6fa",
        "b903cad6-f701-4f58-987d-5ca8078cdc0a",
        "8414fb17-ef1e-4657-9049-52d0f95995f8",
        "cc9dcb31-12ed-4791-97f6-e6f4dcc83cc8",
        "2037cabb-da5f-4814-8dc7-68e1cdc810a4",
        "d60dbe10-cd19-4e07-a6bb-817fd6e95abe",
        "08d32fec-672d-47ee-ad11-4674cabe4191",
        "aab328d0-037a-4dd2-bb61-321865b82167",
        "c0579a0e-b356-4998-9729-dc2587ea5e21",
        "a3fd6797-aed2-40d0-87a9-bea876c03def",
        "1cb09494-97f4-4cf7-bfd6-617f4c4aa562",
        "952cbc62-5845-477a-a878-027883e5015b",
        "c664d678-0b50-40f4-a951-529b4e49c5a9",
        "7b519216-82a5-4ef8-afa8-132083be5b57",
        "660240d9-4134-4b6e-b7ce-358675241bff",
        "87a09316-921f-445f-96a1-b37ebc97d678",
        "30c945a4-6b1d-4fe8-b8db-9abc95250eda",
        "d97af16a-d90a-4294-90b3-286a2b86af13",
        "e42626fa-24b2-43dc-8043-9c48992e9179",
        "2aae06d1-434a-4791-b314-31c1d70d5f4a",
        "b7e5196a-7b3b-4deb-ab40-a3b23f3a1396",
        "69e6b4e4-dffc-4868-b0b9-d4224436115e",
        "28bc32a0-d893-4f1f-bfb8-ff3184eff92e",
        "c23fb4d1-216f-4c7f-90e6-a5130402f7cc",
        "b7517848-47b7-4527-9ca5-426937c0b50f",
        "fabfebdb-7f6f-4a81-96fb-443f6a1b659c",
        "3577c04b-1560-4410-a30e-d33d646b5dd1",
        "2b443617-eace-456f-805f-8a0dfcf5e6a6",
        "01ea7ed6-f07e-4aab-9354-9bed988537a3",
        "18900457-9b79-4368-8606-611ad6434ef8",
        "d8718227-0fcb-4fc2-963c-f96fd40b0606",
        "0d393abe-5cfb-4cc6-8e12-c3a43844f883",
        "58b34c10-8e39-470c-9914-75c781616114",
        "5d65c56a-8eae-43e5-9fe5-b7cd8c7bb7a5",
        "0747f15f-92f8-4059-9bf9-fb5d3e5b176b",
        "69a8e5a7-6504-4305-a208-e97b431e2f05",
        "042684be-7ed7-48b2-a503-ef6a7f891704",
        "b7f9f5e0-b5f4-40bf-97e8-9012b608a8b3",
        "5b27b2f3-7af1-49a3-9a90-2db64c427c17",
        "a47f2790-3cbb-4751-8582-5a338a16108c",
        "2599ea3e-8e42-4159-aac6-d18e65aa44a0",
        "28c40409-e2bb-4d36-a2f8-7e75f431d7c6",
        "290a58c0-c7da-4f7d-a625-80cb1d36991b",
        "bf4c92c6-067f-4fcd-b9f1-7fbbf4db0ddf",
        "beb2e31b-38df-4a99-8e9b-99daf1800636",
        "1c81e761-6412-47b5-8c17-feea9f508e76",
        "02ac64e6-f576-454c-a521-6bcbf660c3cc",
        "4c7774d8-bccd-46c2-a8c2-2e4a04b3f716",
        "50cca945-94ec-4a53-84e3-89e298da699b",
        "763e4266-f1c2-4540-bb97-6d827a8e1019",
        "f4f00de5-a207-4ea1-a678-598dd950fa73",
        "d8227e5d-f04c-460a-b7a7-824c22e3cb5d",
        "9c999614-a5e4-4656-886f-6e89bee3eef9",
        "56a6e2c2-c49e-4413-96ae-f4a293793cc9",
        "64790ad5-5b61-4ec0-bbe5-0798e7e9cfa2",
        "add21db5-e6d0-4693-a790-3cb7d5ff27f4",
        "e0b32676-cf63-424a-932d-87a33c5328d5",
        "db4c8055-3154-460a-80f6-c561932d11a1",
        "cbf86f0d-0ada-4f76-b2ba-10ae76659490",
        "97c99a1b-fafe-42bf-8777-0d59873cfa6a",
        "8761da5d-aa77-49ce-92ab-cbb8ab5a0c11",
        "f1c0369d-bdfb-4c54-8514-ab618d1acb2f",
        "6786f5a9-e565-40f2-b164-3db134efee0d",
        "f9af3e13-a48e-48ea-b2f6-c9067ce3565d",
        "308ab1f1-7365-4a4e-b2c2-637e845a5966",
        "0a871563-4b1b-42a2-8fee-a4370533132e",
        "fcefd742-040c-433a-a811-24610654c9d8",
        "78461933-9916-4dfa-82ac-2f3e8dd09f1b",
        "bdcb443c-1d13-424c-878f-df734061b9a6"
    ]

    return (
        <div className={className}>

            <Carousel
                autoplay={true}
                interval={6000}
                slides={ winnersWithPhoto.map(winnerId => {
                    return <WaitScreenSlide key={winnerId} winnerId={winnerId}/>
                })}
        />

        </div>
    )
}

export const WaitScreen = styled(WaitScreenBase)`
  height: 100vh;
  background: url(${background});
  

  .alice-carousel__stage > li {
    div:first-child {
      align-items: center;
    }
  }

  .react-3d-carousel {
    height: 100%!important;  
  }
  
  .react-3d-carousel .slider-container {
    top: 50%;
  }

  .slider-single-content {

    
    background: linear-gradient(90deg,rgba(244,244,244,0.82) 0%,#f5dfc6d1 30%,#f5dfc6d1 70%,rgba(244,244,244,0.82) 100%)
  }
  
  .react-3d-carousel .slider-container .slider-content .slider-single .slider-single-content {
    box-shadow: 0 0 10px rgb(150, 146, 146)
  }
  .react-3d-carousel .slider-container .slider-content .slider-single {
    top: 50%;
    transform: translateY(-50%);
  }

  .react-3d-carousel .slider-container .slider-content .slider-single.proactive .slider-single-content {
    transform: translateX(40%) scale(0.8);
  }

  .react-3d-carousel .slider-container .slider-content .slider-single.preactive .slider-single-content {
    transform: translateX(-40%) scale(0.8);
  }
  
  .slider-left, .slider-right {
    display: none!important;
  }
`;
