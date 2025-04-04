import {
  Tab,
  TabIndicator,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { fetcher } from "@services/fetcher";
import React, { useEffect, useState } from "react";

const ProfileDetails = ({ viewDetails }: any) => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    debugger;
    const response = await fetcher(
      { path: "/user/get-user-view-data" },
      { json: { userId: viewDetails } }
    );
    setData(response);
    console.log(response);
  };

  return (
    <>
      <div className="p-4 max-h-[calc(100vh-150px)] overflow-y-auto">
        <Tabs position="relative" variant="unstyled">
          <TabList className="font-bold gap-3">
            <Tab>Profile Details</Tab>
            <Tab>Service Details</Tab>
            <Tab>Address</Tab>
            {/* <Tab>Bank</Tab> */}
            <Tab>Experience</Tab>
            <Tab>Training</Tab>
            <Tab>Qualification</Tab>
            <Tab>Awards Publication</Tab>
            {/* <Tab>Nominee Details</Tab> */}
          </TabList>
          <TabIndicator mt="-1.5px" height="2px" bg="#e54f38" borderRadius="1px" />
          <TabPanels>
            <TabPanel>
              <div className="border border-[#aaa] p-4 mb-4 shadow-sm">
                
                <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
                  <div>
                    <label className="font-semibold">Uploaded Image:</label>
                    {data?.uploadPhoto ? (
                      <img
                        src={`data:image/*,${data.uploadPhoto}`}
                        alt="Uploaded"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    ) : (
                      <Text>-</Text>
                    )}
                  </div>
                  <div>
                    <label className="font-semibold">Salutation:</label>
                    <Text>{data?.saiutation || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">First Name:</label>
                    <Text>{data?.first_name || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Middle(Optional):</label>
                    <Text>{data?.middle_name || "-"}</Text>
                  </div>

                  <div>
                    <label className="font-semibold">Last Name:</label>
                    <Text>{data?.last_name || "-"}</Text>
                  </div>

                  <div>
                    <label className="font-semibold">Date of Birth:</label>
                    <Text>{data?.dob || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Gender:</label>
                    <Text>{data?.gender || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Category:</label>
                    <Text>{data?.category || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Father's Name:</label>
                    <Text>{data?.father_name || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Mother's Name:</label>
                    <Text>{data?.mother_name || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Marital Status:</label>
                    <Text>{data?.marital_status || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Name of Spouse:</label>
                    <Text>{data?.spouse_name || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Birth State:</label>
                    <Text>{data?.birth_state || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Birth Place:</label>
                    <Text>{data?.birth_place || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">
                      State of Permanent Residence:
                    </label>
                    <Text>{data?.permanent_residence_state || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Differently Abled:</label>
                    <Text>{data?.differently_abled || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">PAN No.:</label>
                    <Text>{data?.pan_number || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Identification Mark ?:</label>
                    <Text>{data?.identification_mark || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Blood Group:</label>
                    <Text>{data?.blood_group || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Mother Tongue:</label>
                    <Text>{data?.mother_tongue || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Religion:</label>
                    <Text>{data?.religion || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Height(cm):</label>
                    <Text>{data?.height || "-"}</Text>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="border border-[#aaa] p-4 mb-4 shadow-sm">
                {/* <h5 className="text-[#e54f38] font-semibold mb-3">Service Details</h5> */}

                <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
                  <div>
                    <label className="font-semibold">Employee Code</label>
                    <Text>{data?.employee_code || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Service</label>
                    <Text>{data?.service || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Designation</label>
                    <Text>{data?.designation || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Min/Dept/Office</label>
                    <Text>{data?.min_deptOffice || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Current Nodal Officer</label>
                    <Text>{data?.current_nodal_officer || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Pay Matrix Level</label>
                    <Text>{data?.pay_matrix_level || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Basic Pay</label>
                    <Text>{data?.basic_pay || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Pay Event</label>
                    <Text>{data?.pay_event || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Pay Effective Date</label>
                    <Text>{data?.pay_effective_date || "-"}</Text>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="border border-[#aaa] p-4 mb-4 shadow-sm">
                {/* <h5 className="text-[#e54f38] font-semibold mb-3">Address Details</h5> */}
                <h6 className="text-[#e54f38] font-semibold mb-3">Present Address:</h6>
                <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
                  <div>
                    <label className="font-semibold">Address 1:</label>
                    <Text>{data?.present_address1 || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Address 2:</label>
                    <Text>{data?.present_address2 || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">State:</label>
                    <Text>{data?.present_state || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">District:</label>
                    <Text>{data?.present_district || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Pincode:</label>
                    <Text>{data?.present_pincode || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold"> Same as a Present Address:</label>
                    <Text>{data?.same_as_present || "-"}</Text>
                  </div>
                </div>
                <h6 className="text-[#e54f38] font-semibold mb-3">Permanent Address</h6>
                <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
                  <div>
                    <label className="font-semibold"> Address 1:</label>
                    <Text>{data?.permanent_address1 || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold"> Address 2:</label>
                    <Text>{data?.permanent_address2 || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">State:</label>
                    <Text>{data?.permanent_state || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">District:</label>
                    <Text>{data?.permanent_district || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Pincode:</label>
                    <Text>{data?.permanent_pincode || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">Mobile No:</label>
                    <Text>{data?.mobile || "-"}</Text>
                  </div>
                  <div>
                    <label className="font-semibold">
                      Email id
                      {/* 1 (nic/gov/org/eauth/res/ac/es/karmayogi/ernet/net): */}
                    </label>
                    <Text>{data?.email || "-"}</Text>
                  </div>
                </div>
              </div>
            </TabPanel>
            {/* Bank Details  */}
            {/* <TabPanel>
                <div className="border border-[#aaa] p-4 mb-4 shadow-sm">
                  <h5 className="text-[#e54f38] font-semibold mb-3">Bank Details</h5>
                  <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
                    <div>
                      <label className="font-semibold"> Account Holder Name</label>
                      <Text>{data?.account_holder_name || "-"}</Text>
                    </div>
                    <div>
                      <label className="font-semibold">Bank Name</label>
                      <Text>{data?.bank_name || "-"}</Text>
                    </div>
                    <div>
                      <label className="font-semibold">Bank Account No.</label>
                      <Text>{data?.bank_account_no || "-"}</Text>
                    </div>
                    <div>
                      <label className="font-semibold">Branch Name</label>
                      <Text>{data?.branch_name || "-"}</Text>
                    </div>
                    <div>
                      <label className="font-semibold">Confirm Bank Account No.</label>
                      <Text>{data?.confirm_bank_account_no || "-"}</Text>
                    </div>
                    <div>
                      <label className="font-semibold">Branch Address</label>
                      <Text>{data?.branch_address || "-"}</Text>
                    </div>
                    <div>
                      <label className="font-semibold">Branch Name</label>
                      <Text>{data?.branch_name || "-"}</Text>
                    </div>
                  </div>
                </div>
              </TabPanel> */}
            <TabPanel>
              <div className="border border-[#aaa] p-4 mb-4 shadow-sm">
                {/* <h5 className="text-[#e54f38] font-semibold mb-3">
                    Experience Details
                  </h5> */}
                <div className="!max-w-[calc(100vw-100px)] overflow-x-auto">
                  <Table variant="simple" colorScheme="custom" className="mt-2">
                    <Thead>
                      <Tr>
                        <Th bg="#e54f38" color="white">
                          S.N.
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Designation
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Ministry
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Department/Office
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Posting Type
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Location
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Expericnce
                        </Th>
                        <Th bg="#e54f38" color="white">
                          From Date
                        </Th>
                        <Th bg="#e54f38" color="white">
                          To Date
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data?.experience && data.experience.length > 0 ? (
                        data?.experience?.map((it, index) => (
                          <Tr key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{it.designation}</Td>
                            <Td>{it.ministry}</Td>
                            <Td>{it.department}</Td>
                            <Td>{it.posting_type}</Td>
                            <Td>{it.location}</Td>
                            <Td>{it.experience}</Td>
                            <Td>{it.from_date}</Td>
                            <Td>{it.to_date}</Td>
                          </Tr>
                        ))
                      ) : (
                        <Tr>
                          <Td colSpan={9} style={{ textAlign: "center" }}>
                            No data found.
                          </Td>
                        </Tr>
                      )}
                    </Tbody>
                  </Table>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="border border-[#aaa] p-4 mb-4 shadow-sm">
                {/* <h5 className="text-[#e54f38] font-semibold mb-3">Training Details</h5> */}
                <div className="!max-w-[calc(100vw-100px)] overflow-x-auto">
                  <Table variant="simple" colorScheme="custom" className="mt-2">
                    <Thead>
                      <Tr>
                        <Th bg="#e54f38" color="white">
                          S.N.
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Add Training
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Training Name
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Institute
                        </Th>
                        <Th bg="#e54f38" color="white">
                          From Date
                        </Th>
                        <Th bg="#e54f38" color="white">
                          To Date
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Result
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data?.training && data.training.length > 0 ? (
                        data?.training?.map((it, index) => (
                          <Tr key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{it.add_training}</Td>
                            <Td>{it.training_name}</Td>
                            <Td>{it.institute}</Td>
                            <Td>{it.from_date}</Td>
                            <Td>{it.to_date}</Td>
                            <Td>{it.result}</Td>
                          </Tr>
                        ))
                      ) : (
                        <Tr>
                          <Td colSpan={8} style={{ textAlign: "center" }}>
                            No data found.
                          </Td>
                        </Tr>
                      )}
                    </Tbody>
                  </Table>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="border border-[#aaa] p-4 mb-4 shadow-sm">
                {/* <h5 className="text-[#e54f38] font-semibold mb-3">
                    Qualification Details
                  </h5> */}
                <div className="!max-w-[calc(100vw-100px)] overflow-x-auto">
                  <Table variant="simple" colorScheme="custom" className="mt-2">
                    <Thead>
                      <Tr>
                        <Th bg="#e54f38" color="white">
                          S.N.
                        </Th>
                        <Th bg="#e54f38" color="white">
                          University/Institute/Board
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Qualification
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Division
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Year Of Passing
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data?.qualification && data.qualification.length > 0 ? (
                        data.qualification.map((it, index) => (
                          <Tr key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{it.university}</Td>
                            <Td>{it.qualification}</Td>
                            <Td>{it.division}</Td>
                            <Td>{it.year_of_passing}</Td>
                          </Tr>
                        ))
                      ) : (
                        <Tr>
                          <Td colSpan={6} style={{ textAlign: "center" }}>
                            No data found.
                          </Td>
                        </Tr>
                      )}
                    </Tbody>
                  </Table>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="border border-[#aaa] p-4 mb-4 shadow-sm">
                {/* <h5 className="text-[#e54f38] font-semibold mb-3">
                    Awards Publication Details
                  </h5> */}
                <div className="!max-w-[calc(100vw-100px)] overflow-x-auto">
                  <Table variant="simple" colorScheme="custom" className="mt-2">
                    <Thead>
                      <Tr>
                        <Th bg="#e54f38" color="white">
                          S.N.
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Type
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Area
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Year
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Name/Description
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Awards given by/Publisher Name
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Subject
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Level
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data?.awards && data.awards.length > 0 ? (
                        data?.awards?.map((it, index) => (
                          <Tr key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{it.type}</Td>
                            <Td>{it.area}</Td>
                            <Td>{it.year}</Td>
                            <Td>{it.name_description}</Td>
                            <Td>{it.award_publisher}</Td>
                            <Td>{it.subject}</Td>
                            <Td>{it.level}</Td>
                          </Tr>
                        ))
                      ) : (
                        <Tr>
                          <Td colSpan={9} style={{ textAlign: "center" }}>
                            No data found.
                          </Td>
                        </Tr>
                      )}
                    </Tbody>
                  </Table>
                </div>
              </div>
            </TabPanel>
            {/* Nomminee  */}
            {/* <TabPanel>
                <div className="border border-[#aaa] p-4 mb-4 shadow-sm">
                  <h5 className="text-[#e54f38] font-semibold mb-3">Nominee Details</h5>
                  <Table variant="simple" colorScheme="custom" className="mt-2">
                    <Thead>
                      <Tr>
                        <Th bg="#e54f38" color="white">
                          S.N.
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Component Name
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Name of the Nominee
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Age
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Percentage of Share Payable
                        </Th>
                        <Th bg="#e54f38" color="white">
                          Relationship
                        </Th>
                      </Tr>
                    </Thead>
                    {data?.nominee && data.nominee.length > 0 ? (
                      data?.nominee?.map((it, index) => (
                        <Tr key={index}>
                          <Td>{index + 1}</Td>
                          <Td>{it.component_name}</Td>
                          <Td>{it.name_of_nominee}</Td>
                          <Td>{it.age}</Td>
                          <Td>{it.parcentage_of_payable}</Td>
                          <Td>{it.relationship}</Td>
                        </Tr>
                      ))
                    ) : (
                      <Tr>
                        <Td colSpan={9} style={{ textAlign: "center" }}>
                          No data found.
                        </Td>
                      </Tr>
                    )}
                  </Table>
                </div>
              </TabPanel> */}
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default ProfileDetails;
