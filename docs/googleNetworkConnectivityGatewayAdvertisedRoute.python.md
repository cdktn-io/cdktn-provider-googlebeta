# `googleNetworkConnectivityGatewayAdvertisedRoute` Submodule <a name="`googleNetworkConnectivityGatewayAdvertisedRoute` Submodule" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityGatewayAdvertisedRoute <a name="GoogleNetworkConnectivityGatewayAdvertisedRoute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route google_network_connectivity_gateway_advertised_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_gateway_advertised_route

googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  spoke: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  ip_range: str = None,
  labels: typing.Mapping[str] = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  recipient: str = None,
  timeouts: GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the gateway advertised route. Route names must be unique. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.spoke">spoke</a></code> | <code>str</code> | The name of the spoke. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the gateway advertised route. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#id GoogleNetworkConnectivityGatewayAdvertisedRoute#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.ipRange">ip_range</a></code> | <code>str</code> | This route's advertised IP address range. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of this advertised route. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#project GoogleNetworkConnectivityGatewayAdvertisedRoute#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.recipient">recipient</a></code> | <code>str</code> | the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#location GoogleNetworkConnectivityGatewayAdvertisedRoute#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.name"></a>

- *Type:* str

The name of the gateway advertised route. Route names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#name GoogleNetworkConnectivityGatewayAdvertisedRoute#name}

---

##### `spoke`<sup>Required</sup> <a name="spoke" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.spoke"></a>

- *Type:* str

The name of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#spoke GoogleNetworkConnectivityGatewayAdvertisedRoute#spoke}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#deletion_policy GoogleNetworkConnectivityGatewayAdvertisedRoute#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the gateway advertised route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#description GoogleNetworkConnectivityGatewayAdvertisedRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#id GoogleNetworkConnectivityGatewayAdvertisedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_range`<sup>Optional</sup> <a name="ip_range" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.ipRange"></a>

- *Type:* str

This route's advertised IP address range.

Must be a valid CIDR-formatted prefix.
If an IP address is provided without a subnet mask, it is interpreted as, for IPv4, a /32 singular IP address range, and, for IPv6, /128

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#ip_range GoogleNetworkConnectivityGatewayAdvertisedRoute#ip_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#labels GoogleNetworkConnectivityGatewayAdvertisedRoute#labels}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority of this advertised route.

You can choose a value from 0 to 65335.
If you don't provide a value, Google Cloud assigns a priority of 100 to the ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#priority GoogleNetworkConnectivityGatewayAdvertisedRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#project GoogleNetworkConnectivityGatewayAdvertisedRoute#project}.

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.recipient"></a>

- *Type:* str

the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#recipient GoogleNetworkConnectivityGatewayAdvertisedRoute#recipient}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#timeouts GoogleNetworkConnectivityGatewayAdvertisedRoute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetIpRange">reset_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetRecipient">reset_recipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#create GoogleNetworkConnectivityGatewayAdvertisedRoute#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#delete GoogleNetworkConnectivityGatewayAdvertisedRoute#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#update GoogleNetworkConnectivityGatewayAdvertisedRoute#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_range` <a name="reset_ip_range" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetIpRange"></a>

```python
def reset_ip_range() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_recipient` <a name="reset_recipient" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetRecipient"></a>

```python
def reset_recipient() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkConnectivityGatewayAdvertisedRoute resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_gateway_advertised_route

googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_gateway_advertised_route

googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_gateway_advertised_route

googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_gateway_advertised_route

googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkConnectivityGatewayAdvertisedRoute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkConnectivityGatewayAdvertisedRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkConnectivityGatewayAdvertisedRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityGatewayAdvertisedRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.ipRangeInput">ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.recipientInput">recipient_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.spokeInput">spoke_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.ipRange">ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.recipient">recipient</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.spoke">spoke</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_range_input`<sup>Optional</sup> <a name="ip_range_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.ipRangeInput"></a>

```python
ip_range_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `recipient_input`<sup>Optional</sup> <a name="recipient_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.recipientInput"></a>

```python
recipient_input: str
```

- *Type:* str

---

##### `spoke_input`<sup>Optional</sup> <a name="spoke_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.spokeInput"></a>

```python
spoke_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.recipient"></a>

```python
recipient: str
```

- *Type:* str

---

##### `spoke`<sup>Required</sup> <a name="spoke" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.spoke"></a>

```python
spoke: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityGatewayAdvertisedRouteConfig <a name="GoogleNetworkConnectivityGatewayAdvertisedRouteConfig" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_gateway_advertised_route

googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  spoke: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  ip_range: str = None,
  labels: typing.Mapping[str] = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  recipient: str = None,
  timeouts: GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.name">name</a></code> | <code>str</code> | The name of the gateway advertised route. Route names must be unique. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.spoke">spoke</a></code> | <code>str</code> | The name of the spoke. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.description">description</a></code> | <code>str</code> | An optional description of the gateway advertised route. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#id GoogleNetworkConnectivityGatewayAdvertisedRoute#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.ipRange">ip_range</a></code> | <code>str</code> | This route's advertised IP address range. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of this advertised route. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#project GoogleNetworkConnectivityGatewayAdvertisedRoute#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.recipient">recipient</a></code> | <code>str</code> | the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#location GoogleNetworkConnectivityGatewayAdvertisedRoute#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the gateway advertised route. Route names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#name GoogleNetworkConnectivityGatewayAdvertisedRoute#name}

---

##### `spoke`<sup>Required</sup> <a name="spoke" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.spoke"></a>

```python
spoke: str
```

- *Type:* str

The name of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#spoke GoogleNetworkConnectivityGatewayAdvertisedRoute#spoke}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#deletion_policy GoogleNetworkConnectivityGatewayAdvertisedRoute#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the gateway advertised route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#description GoogleNetworkConnectivityGatewayAdvertisedRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#id GoogleNetworkConnectivityGatewayAdvertisedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_range`<sup>Optional</sup> <a name="ip_range" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

This route's advertised IP address range.

Must be a valid CIDR-formatted prefix.
If an IP address is provided without a subnet mask, it is interpreted as, for IPv4, a /32 singular IP address range, and, for IPv6, /128

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#ip_range GoogleNetworkConnectivityGatewayAdvertisedRoute#ip_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#labels GoogleNetworkConnectivityGatewayAdvertisedRoute#labels}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of this advertised route.

You can choose a value from 0 to 65335.
If you don't provide a value, Google Cloud assigns a priority of 100 to the ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#priority GoogleNetworkConnectivityGatewayAdvertisedRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#project GoogleNetworkConnectivityGatewayAdvertisedRoute#project}.

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.recipient"></a>

```python
recipient: str
```

- *Type:* str

the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#recipient GoogleNetworkConnectivityGatewayAdvertisedRoute#recipient}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#timeouts GoogleNetworkConnectivityGatewayAdvertisedRoute#timeouts}

---

### GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts <a name="GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_gateway_advertised_route

googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#create GoogleNetworkConnectivityGatewayAdvertisedRoute#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#delete GoogleNetworkConnectivityGatewayAdvertisedRoute#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#update GoogleNetworkConnectivityGatewayAdvertisedRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#create GoogleNetworkConnectivityGatewayAdvertisedRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#delete GoogleNetworkConnectivityGatewayAdvertisedRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_gateway_advertised_route#update GoogleNetworkConnectivityGatewayAdvertisedRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference <a name="GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_gateway_advertised_route

googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

---



