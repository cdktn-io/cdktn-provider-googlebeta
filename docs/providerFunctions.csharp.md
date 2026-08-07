# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-google-beta.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### GoogleBetaProviderFunctions <a name="GoogleBetaProviderFunctions" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions"></a>

Provider-defined functions of the google-beta provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBetaProviderFunctions(string ProviderLocalName);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.Initializer.parameter.providerLocalName">ProviderLocalName</a></code> | <code>string</code> | The local name of the provider in required_providers; |

---

##### `ProviderLocalName`<sup>Required</sup> <a name="ProviderLocalName" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* string

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.locationFromId">LocationFromId</a></code> | Takes a single string argument, which should be a resource id, self link, or OP style resource name. |
| <code><a href="#@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.nameFromId">NameFromId</a></code> | Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name. |
| <code><a href="#@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.projectFromId">ProjectFromId</a></code> | Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name. |
| <code><a href="#@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.regionFromId">RegionFromId</a></code> | Takes a single string argument, which should be a resource id, self link, or OP style resource name. |
| <code><a href="#@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.regionFromZone">RegionFromZone</a></code> | Takes a single string argument, which should be a resource's zone. |
| <code><a href="#@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.zoneFromId">ZoneFromId</a></code> | Takes a single string argument, which should be an id or self link of a resource. |

---

##### `LocationFromId` <a name="LocationFromId" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.locationFromId"></a>

```csharp
private string LocationFromId(string Id)
```

Takes a single string argument, which should be a resource id, self link, or OP style resource name.

This function will either return the location name from the input string or raise an error due to no location being present in the string. The function uses the presence of "locations/{{location}}/" in the input string to identify the location name, e.g. when the function is passed the id "projects/my-project/locations/us-central1/services/my-service" as an argument it will return "us-central1".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.locationFromId.parameter.id"></a>

- *Type:* string

A string of a resource's id, a resource's self link, or an OP style resource name.

For example, "projects/my-project/locations/us-central1/services/my-service" and "https://run.googleapis.com/v2/projects/my-project/locations/us-central1/services/my-service" are valid values containing locations

---

##### `NameFromId` <a name="NameFromId" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.nameFromId"></a>

```csharp
private string NameFromId(string Id)
```

Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name.

This function will return the short-form name of a resource from the input string, or raise an error due to a problem with the input string. The function returns the final element in the input string as the resource's name, e.g. when the function is passed the id "projects/my-project/zones/us-central1-c/instances/my-instance" as an argument it will return "my-instance".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.nameFromId.parameter.id"></a>

- *Type:* string

A string of a resource's id, resource URI, self link, or full resource name.

For example, "projects/my-project/zones/us-central1-c/instances/my-instance", "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-c/instances/my-instance" and "//gkehub.googleapis.com/projects/my-project/locations/us-central1/memberships/my-membership" are valid values

---

##### `ProjectFromId` <a name="ProjectFromId" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.projectFromId"></a>

```csharp
private string ProjectFromId(string Id)
```

Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name.

This function will either return the project name from the input string or raise an error due to no project being present in the string. The function uses the presence of "projects/{{project}}/" in the input string to identify the project name, e.g. when the function is passed the id "projects/my-project/zones/us-central1-c/instances/my-instance" as an argument it will return "my-project".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.projectFromId.parameter.id"></a>

- *Type:* string

A string of a resource's id, resource URI, self link, or full resource name.

For example, "projects/my-project/zones/us-central1-c/instances/my-instance", "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-c/instances/my-instance" and "//gkehub.googleapis.com/projects/my-project/locations/us-central1/memberships/my-membership" are valid values

---

##### `RegionFromId` <a name="RegionFromId" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.regionFromId"></a>

```csharp
private string RegionFromId(string Id)
```

Takes a single string argument, which should be a resource id, self link, or OP style resource name.

This function will either return the region name from the input string or raise an error due to no region being present in the string. The function uses the presence of "regions/{{region}}/" in the input string to identify the region name, e.g. when the function is passed the id "projects/my-project/regions/us-central1/subnetworks/my-subnetwork" as an argument it will return "us-central1".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.regionFromId.parameter.id"></a>

- *Type:* string

A string of a resource's id, a resource's self link, or an OP style resource name.

For example, "projects/my-project/regions/us-central1/subnetworks/my-subnetwork" and "https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/subnetworks/my-subnetwork" are valid values containing regions

---

##### `RegionFromZone` <a name="RegionFromZone" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.regionFromZone"></a>

```csharp
private string RegionFromZone(string Zone)
```

Takes a single string argument, which should be a resource's zone.

###### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.regionFromZone.parameter.zone"></a>

- *Type:* string

A string of a resource's zone.

---

##### `ZoneFromId` <a name="ZoneFromId" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.zoneFromId"></a>

```csharp
private string ZoneFromId(string Id)
```

Takes a single string argument, which should be an id or self link of a resource.

This function will either return the zone name from the input string or raise an error due to no zone being present in the string. The function uses the presence of "zones/{{zone}}/" in the input string to identify the zone name, e.g. when the function is passed the id "projects/my-project/zones/us-central1-c/instances/my-instance" as an argument it will return "us-central1-c".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.providerFunctions.GoogleBetaProviderFunctions.zoneFromId.parameter.id"></a>

- *Type:* string

An id of a resource, or a self link.

For example, both "projects/my-project/zones/us-central1-c/instances/my-instance" and "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-c/instances/my-instance" are valid inputs

---





