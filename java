// controller method

@PostMapping("/get-user-view-data")
  public <json> EncryptedResponse resume(@RequestBody EncryptedRequest req,
      HttpServletRequest request)
      throws Exception {
    var body = req.bodyAs(LongId.class);
    User user = (User) request.getAttribute("user");

    Long userId = body.userId() == null ? user.getId() : body.userId();

    var details = userRepo.getUserViewDetails(userId);
    String uploadedPhotoUUID = (String) details.get("upload_photo");
    System.out.println("Uploaded Photo UUID: " + uploadedPhotoUUID);

    String uploadedPhoto = "hrmsphoto" + uploadedPhotoUUID;

    String convertedToBasePhoto = userService.retrieveImageAsBase64(uploadedPhoto);

    System.out.println(convertedToBasePhoto);
    var experience = userRepo.getUserViewExperienceDetails(userId);
    var training = userRepo.getUserViewTrainingDetails(userId);
    var qualification = userRepo.getUserViewQualificationDetails(userId);
    var awards = userRepo.getUserViewAwardsDetails(userId);

    var modifiedDetails = new HashMap<>(details);
    modifiedDetails.put("experience", experience);
    modifiedDetails.put("training", training);
    modifiedDetails.put("qualification", qualification);
    modifiedDetails.put("awards", awards);

    modifiedDetails.put("upload_photo", convertedToBasePhoto);

    return new EncryptedResponse(modifiedDetails);
  }




// service file code 

  public String retrieveImageAsBase64(String uuid) {
    File file = new File(fileServerPath, uuid);

    // Read the file and convert it to Base64
    try (FileInputStream fileInputStream = new FileInputStream(file)) {
      byte[] fileBytes = new byte[(int) file.length()];
      fileInputStream.read(fileBytes);
      return Base64.getEncoder().encodeToString(fileBytes);
    } catch (IOException e) {
      e.printStackTrace();
      return null; // Handle the error as needed
    }
  }
