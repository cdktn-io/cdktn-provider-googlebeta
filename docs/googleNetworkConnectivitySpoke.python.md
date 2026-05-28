# `googleNetworkConnectivitySpoke` Submodule <a name="`googleNetworkConnectivitySpoke` Submodule" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivitySpoke <a name="GoogleNetworkConnectivitySpoke" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke google_network_connectivity_spoke}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hub: str,
  location: str,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  gateway: GoogleNetworkConnectivitySpokeGateway = None,
  group: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  linked_interconnect_attachments: GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments = None,
  linked_producer_vpc_network: GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork = None,
  linked_router_appliance_instances: GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances = None,
  linked_vpc_network: GoogleNetworkConnectivitySpokeLinkedVpcNetwork = None,
  linked_vpn_tunnels: GoogleNetworkConnectivitySpokeLinkedVpnTunnels = None,
  project: str = None,
  timeouts: GoogleNetworkConnectivitySpokeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.hub">hub</a></code> | <code>str</code> | Immutable. The URI of the hub that this spoke is attached to. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.name">name</a></code> | <code>str</code> | Immutable. The name of the spoke. Spoke names must be unique. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the spoke. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.gateway">gateway</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway">GoogleNetworkConnectivitySpokeGateway</a></code> | gateway block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.group">group</a></code> | <code>str</code> | The name of the group that this spoke is associated with. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#id GoogleNetworkConnectivitySpoke#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.linkedInterconnectAttachments">linked_interconnect_attachments</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | linked_interconnect_attachments block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.linkedProducerVpcNetwork">linked_producer_vpc_network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork">GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork</a></code> | linked_producer_vpc_network block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.linkedRouterApplianceInstances">linked_router_appliance_instances</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | linked_router_appliance_instances block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.linkedVpcNetwork">linked_vpc_network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork">GoogleNetworkConnectivitySpokeLinkedVpcNetwork</a></code> | linked_vpc_network block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.linkedVpnTunnels">linked_vpn_tunnels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a></code> | linked_vpn_tunnels block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#project GoogleNetworkConnectivitySpoke#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.hub"></a>

- *Type:* str

Immutable. The URI of the hub that this spoke is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#hub GoogleNetworkConnectivitySpoke#hub}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#location GoogleNetworkConnectivitySpoke#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.name"></a>

- *Type:* str

Immutable. The name of the spoke. Spoke names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#name GoogleNetworkConnectivitySpoke#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#deletion_policy GoogleNetworkConnectivitySpoke#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#description GoogleNetworkConnectivitySpoke#description}

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.gateway"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway">GoogleNetworkConnectivitySpokeGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#gateway GoogleNetworkConnectivitySpoke#gateway}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.group"></a>

- *Type:* str

The name of the group that this spoke is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#group GoogleNetworkConnectivitySpoke#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#id GoogleNetworkConnectivitySpoke#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#labels GoogleNetworkConnectivitySpoke#labels}

---

##### `linked_interconnect_attachments`<sup>Optional</sup> <a name="linked_interconnect_attachments" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.linkedInterconnectAttachments"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a>

linked_interconnect_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#linked_interconnect_attachments GoogleNetworkConnectivitySpoke#linked_interconnect_attachments}

---

##### `linked_producer_vpc_network`<sup>Optional</sup> <a name="linked_producer_vpc_network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.linkedProducerVpcNetwork"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork">GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork</a>

linked_producer_vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#linked_producer_vpc_network GoogleNetworkConnectivitySpoke#linked_producer_vpc_network}

---

##### `linked_router_appliance_instances`<sup>Optional</sup> <a name="linked_router_appliance_instances" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.linkedRouterApplianceInstances"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

linked_router_appliance_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#linked_router_appliance_instances GoogleNetworkConnectivitySpoke#linked_router_appliance_instances}

---

##### `linked_vpc_network`<sup>Optional</sup> <a name="linked_vpc_network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.linkedVpcNetwork"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork">GoogleNetworkConnectivitySpokeLinkedVpcNetwork</a>

linked_vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#linked_vpc_network GoogleNetworkConnectivitySpoke#linked_vpc_network}

---

##### `linked_vpn_tunnels`<sup>Optional</sup> <a name="linked_vpn_tunnels" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.linkedVpnTunnels"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a>

linked_vpn_tunnels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#linked_vpn_tunnels GoogleNetworkConnectivitySpoke#linked_vpn_tunnels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#project GoogleNetworkConnectivitySpoke#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#timeouts GoogleNetworkConnectivitySpoke#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putGateway">put_gateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedInterconnectAttachments">put_linked_interconnect_attachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedProducerVpcNetwork">put_linked_producer_vpc_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedRouterApplianceInstances">put_linked_router_appliance_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpcNetwork">put_linked_vpc_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpnTunnels">put_linked_vpn_tunnels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetGateway">reset_gateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedInterconnectAttachments">reset_linked_interconnect_attachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedProducerVpcNetwork">reset_linked_producer_vpc_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedRouterApplianceInstances">reset_linked_router_appliance_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedVpcNetwork">reset_linked_vpc_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedVpnTunnels">reset_linked_vpn_tunnels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gateway` <a name="put_gateway" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putGateway"></a>

```python
def put_gateway(
  capacity: str,
  ip_range_reservations: IResolvable | typing.List[GoogleNetworkConnectivitySpokeGatewayIpRangeReservations]
) -> None
```

###### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putGateway.parameter.capacity"></a>

- *Type:* str

the capacity of the gateway spoke, in Gbps. Possible values: ["CAPACITY_1_GBPS", "CAPACITY_10_GBPS", "CAPACITY_100_GBPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#capacity GoogleNetworkConnectivitySpoke#capacity}

---

###### `ip_range_reservations`<sup>Required</sup> <a name="ip_range_reservations" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putGateway.parameter.ipRangeReservations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations">GoogleNetworkConnectivitySpokeGatewayIpRangeReservations</a>]

ip_range_reservations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#ip_range_reservations GoogleNetworkConnectivitySpoke#ip_range_reservations}

---

##### `put_linked_interconnect_attachments` <a name="put_linked_interconnect_attachments" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedInterconnectAttachments"></a>

```python
def put_linked_interconnect_attachments(
  site_to_site_data_transfer: bool | IResolvable,
  uris: typing.List[str],
  exclude_export_ranges: typing.List[str] = None,
  exclude_import_ranges: typing.List[str] = None,
  include_export_ranges: typing.List[str] = None,
  include_import_ranges: typing.List[str] = None
) -> None
```

###### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedInterconnectAttachments.parameter.siteToSiteDataTransfer"></a>

- *Type:* bool | cdktn.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#site_to_site_data_transfer GoogleNetworkConnectivitySpoke#site_to_site_data_transfer}

---

###### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedInterconnectAttachments.parameter.uris"></a>

- *Type:* typing.List[str]

The URIs of linked interconnect attachment resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#uris GoogleNetworkConnectivitySpoke#uris}

---

###### `exclude_export_ranges`<sup>Optional</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedInterconnectAttachments.parameter.excludeExportRanges"></a>

- *Type:* typing.List[str]

Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_export_ranges GoogleNetworkConnectivitySpoke#exclude_export_ranges}

---

###### `exclude_import_ranges`<sup>Optional</sup> <a name="exclude_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedInterconnectAttachments.parameter.excludeImportRanges"></a>

- *Type:* typing.List[str]

Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_import_ranges GoogleNetworkConnectivitySpoke#exclude_import_ranges}

---

###### `include_export_ranges`<sup>Optional</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedInterconnectAttachments.parameter.includeExportRanges"></a>

- *Type:* typing.List[str]

Dynamic routes fully encompassed by include export ranges are included during export to hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_export_ranges GoogleNetworkConnectivitySpoke#include_export_ranges}

---

###### `include_import_ranges`<sup>Optional</sup> <a name="include_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedInterconnectAttachments.parameter.includeImportRanges"></a>

- *Type:* typing.List[str]

Hub routes fully encompassed by include import ranges are included during import from hub.

"ALL_IPV4_RANGES" or IPv4 CIDR ranges are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_import_ranges GoogleNetworkConnectivitySpoke#include_import_ranges}

---

##### `put_linked_producer_vpc_network` <a name="put_linked_producer_vpc_network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedProducerVpcNetwork"></a>

```python
def put_linked_producer_vpc_network(
  network: str,
  peering: str,
  exclude_export_ranges: typing.List[str] = None,
  include_export_ranges: typing.List[str] = None
) -> None
```

###### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedProducerVpcNetwork.parameter.network"></a>

- *Type:* str

The URI of the Service Consumer VPC that the Producer VPC is peered with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#network GoogleNetworkConnectivitySpoke#network}

---

###### `peering`<sup>Required</sup> <a name="peering" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedProducerVpcNetwork.parameter.peering"></a>

- *Type:* str

The name of the VPC peering between the Service Consumer VPC and the Producer VPC (defined in the Tenant project) which is added to the NCC hub.

This peering must be in ACTIVE state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#peering GoogleNetworkConnectivitySpoke#peering}

---

###### `exclude_export_ranges`<sup>Optional</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedProducerVpcNetwork.parameter.excludeExportRanges"></a>

- *Type:* typing.List[str]

IP ranges encompassing the subnets to be excluded from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_export_ranges GoogleNetworkConnectivitySpoke#exclude_export_ranges}

---

###### `include_export_ranges`<sup>Optional</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedProducerVpcNetwork.parameter.includeExportRanges"></a>

- *Type:* typing.List[str]

IP ranges allowed to be included from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_export_ranges GoogleNetworkConnectivitySpoke#include_export_ranges}

---

##### `put_linked_router_appliance_instances` <a name="put_linked_router_appliance_instances" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedRouterApplianceInstances"></a>

```python
def put_linked_router_appliance_instances(
  instances: IResolvable | typing.List[GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances],
  site_to_site_data_transfer: bool | IResolvable,
  exclude_export_ranges: typing.List[str] = None,
  exclude_import_ranges: typing.List[str] = None,
  include_export_ranges: typing.List[str] = None,
  include_import_ranges: typing.List[str] = None
) -> None
```

###### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedRouterApplianceInstances.parameter.instances"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#instances GoogleNetworkConnectivitySpoke#instances}

---

###### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedRouterApplianceInstances.parameter.siteToSiteDataTransfer"></a>

- *Type:* bool | cdktn.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#site_to_site_data_transfer GoogleNetworkConnectivitySpoke#site_to_site_data_transfer}

---

###### `exclude_export_ranges`<sup>Optional</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedRouterApplianceInstances.parameter.excludeExportRanges"></a>

- *Type:* typing.List[str]

Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_export_ranges GoogleNetworkConnectivitySpoke#exclude_export_ranges}

---

###### `exclude_import_ranges`<sup>Optional</sup> <a name="exclude_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedRouterApplianceInstances.parameter.excludeImportRanges"></a>

- *Type:* typing.List[str]

Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_import_ranges GoogleNetworkConnectivitySpoke#exclude_import_ranges}

---

###### `include_export_ranges`<sup>Optional</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedRouterApplianceInstances.parameter.includeExportRanges"></a>

- *Type:* typing.List[str]

Dynamic routes fully encompassed by include export ranges are included during export to hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_export_ranges GoogleNetworkConnectivitySpoke#include_export_ranges}

---

###### `include_import_ranges`<sup>Optional</sup> <a name="include_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedRouterApplianceInstances.parameter.includeImportRanges"></a>

- *Type:* typing.List[str]

Hub routes fully encompassed by include import ranges are included during import from hub.

"ALL_IPV4_RANGES" or IPv4 CIDR ranges are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_import_ranges GoogleNetworkConnectivitySpoke#include_import_ranges}

---

##### `put_linked_vpc_network` <a name="put_linked_vpc_network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpcNetwork"></a>

```python
def put_linked_vpc_network(
  uri: str,
  exclude_export_ranges: typing.List[str] = None,
  include_export_ranges: typing.List[str] = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpcNetwork.parameter.uri"></a>

- *Type:* str

The URI of the VPC network resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#uri GoogleNetworkConnectivitySpoke#uri}

---

###### `exclude_export_ranges`<sup>Optional</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpcNetwork.parameter.excludeExportRanges"></a>

- *Type:* typing.List[str]

IP ranges encompassing the subnets to be excluded from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_export_ranges GoogleNetworkConnectivitySpoke#exclude_export_ranges}

---

###### `include_export_ranges`<sup>Optional</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpcNetwork.parameter.includeExportRanges"></a>

- *Type:* typing.List[str]

IP ranges allowed to be included from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_export_ranges GoogleNetworkConnectivitySpoke#include_export_ranges}

---

##### `put_linked_vpn_tunnels` <a name="put_linked_vpn_tunnels" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpnTunnels"></a>

```python
def put_linked_vpn_tunnels(
  site_to_site_data_transfer: bool | IResolvable,
  uris: typing.List[str],
  exclude_export_ranges: typing.List[str] = None,
  exclude_import_ranges: typing.List[str] = None,
  include_export_ranges: typing.List[str] = None,
  include_import_ranges: typing.List[str] = None
) -> None
```

###### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpnTunnels.parameter.siteToSiteDataTransfer"></a>

- *Type:* bool | cdktn.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#site_to_site_data_transfer GoogleNetworkConnectivitySpoke#site_to_site_data_transfer}

---

###### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpnTunnels.parameter.uris"></a>

- *Type:* typing.List[str]

The URIs of linked VPN tunnel resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#uris GoogleNetworkConnectivitySpoke#uris}

---

###### `exclude_export_ranges`<sup>Optional</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpnTunnels.parameter.excludeExportRanges"></a>

- *Type:* typing.List[str]

Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_export_ranges GoogleNetworkConnectivitySpoke#exclude_export_ranges}

---

###### `exclude_import_ranges`<sup>Optional</sup> <a name="exclude_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpnTunnels.parameter.excludeImportRanges"></a>

- *Type:* typing.List[str]

Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_import_ranges GoogleNetworkConnectivitySpoke#exclude_import_ranges}

---

###### `include_export_ranges`<sup>Optional</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpnTunnels.parameter.includeExportRanges"></a>

- *Type:* typing.List[str]

Dynamic routes fully encompassed by include export ranges are included during export to hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_export_ranges GoogleNetworkConnectivitySpoke#include_export_ranges}

---

###### `include_import_ranges`<sup>Optional</sup> <a name="include_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpnTunnels.parameter.includeImportRanges"></a>

- *Type:* typing.List[str]

Hub routes fully encompassed by include import ranges are included during import from hub.

"ALL_IPV4_RANGES" or IPv4 CIDR ranges are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_import_ranges GoogleNetworkConnectivitySpoke#include_import_ranges}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#create GoogleNetworkConnectivitySpoke#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#delete GoogleNetworkConnectivitySpoke#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#update GoogleNetworkConnectivitySpoke#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_gateway` <a name="reset_gateway" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetGateway"></a>

```python
def reset_gateway() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_linked_interconnect_attachments` <a name="reset_linked_interconnect_attachments" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedInterconnectAttachments"></a>

```python
def reset_linked_interconnect_attachments() -> None
```

##### `reset_linked_producer_vpc_network` <a name="reset_linked_producer_vpc_network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedProducerVpcNetwork"></a>

```python
def reset_linked_producer_vpc_network() -> None
```

##### `reset_linked_router_appliance_instances` <a name="reset_linked_router_appliance_instances" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedRouterApplianceInstances"></a>

```python
def reset_linked_router_appliance_instances() -> None
```

##### `reset_linked_vpc_network` <a name="reset_linked_vpc_network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedVpcNetwork"></a>

```python
def reset_linked_vpc_network() -> None
```

##### `reset_linked_vpn_tunnels` <a name="reset_linked_vpn_tunnels" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedVpnTunnels"></a>

```python
def reset_linked_vpn_tunnels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkConnectivitySpoke resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkConnectivitySpoke resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkConnectivitySpoke to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkConnectivitySpoke that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivitySpoke to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.gateway">gateway</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference">GoogleNetworkConnectivitySpokeGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedInterconnectAttachments">linked_interconnect_attachments</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedProducerVpcNetwork">linked_producer_vpc_network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference">GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedRouterApplianceInstances">linked_router_appliance_instances</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedVpcNetwork">linked_vpc_network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference">GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedVpnTunnels">linked_vpn_tunnels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference">GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.reasons">reasons</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList">GoogleNetworkConnectivitySpokeReasonsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference">GoogleNetworkConnectivitySpokeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.gatewayInput">gateway_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway">GoogleNetworkConnectivitySpokeGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.hubInput">hub_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedInterconnectAttachmentsInput">linked_interconnect_attachments_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedProducerVpcNetworkInput">linked_producer_vpc_network_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork">GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedRouterApplianceInstancesInput">linked_router_appliance_instances_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedVpcNetworkInput">linked_vpc_network_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork">GoogleNetworkConnectivitySpokeLinkedVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedVpnTunnelsInput">linked_vpn_tunnels_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.hub">hub</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.gateway"></a>

```python
gateway: GoogleNetworkConnectivitySpokeGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference">GoogleNetworkConnectivitySpokeGatewayOutputReference</a>

---

##### `linked_interconnect_attachments`<sup>Required</sup> <a name="linked_interconnect_attachments" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedInterconnectAttachments"></a>

```python
linked_interconnect_attachments: GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference</a>

---

##### `linked_producer_vpc_network`<sup>Required</sup> <a name="linked_producer_vpc_network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedProducerVpcNetwork"></a>

```python
linked_producer_vpc_network: GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference">GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference</a>

---

##### `linked_router_appliance_instances`<sup>Required</sup> <a name="linked_router_appliance_instances" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedRouterApplianceInstances"></a>

```python
linked_router_appliance_instances: GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference</a>

---

##### `linked_vpc_network`<sup>Required</sup> <a name="linked_vpc_network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedVpcNetwork"></a>

```python
linked_vpc_network: GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference">GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference</a>

---

##### `linked_vpn_tunnels`<sup>Required</sup> <a name="linked_vpn_tunnels" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedVpnTunnels"></a>

```python
linked_vpn_tunnels: GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference">GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference</a>

---

##### `reasons`<sup>Required</sup> <a name="reasons" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.reasons"></a>

```python
reasons: GoogleNetworkConnectivitySpokeReasonsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList">GoogleNetworkConnectivitySpokeReasonsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivitySpokeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference">GoogleNetworkConnectivitySpokeTimeoutsOutputReference</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.gatewayInput"></a>

```python
gateway_input: GoogleNetworkConnectivitySpokeGateway
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway">GoogleNetworkConnectivitySpokeGateway</a>

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `hub_input`<sup>Optional</sup> <a name="hub_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.hubInput"></a>

```python
hub_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `linked_interconnect_attachments_input`<sup>Optional</sup> <a name="linked_interconnect_attachments_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedInterconnectAttachmentsInput"></a>

```python
linked_interconnect_attachments_input: GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---

##### `linked_producer_vpc_network_input`<sup>Optional</sup> <a name="linked_producer_vpc_network_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedProducerVpcNetworkInput"></a>

```python
linked_producer_vpc_network_input: GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork">GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork</a>

---

##### `linked_router_appliance_instances_input`<sup>Optional</sup> <a name="linked_router_appliance_instances_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedRouterApplianceInstancesInput"></a>

```python
linked_router_appliance_instances_input: GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---

##### `linked_vpc_network_input`<sup>Optional</sup> <a name="linked_vpc_network_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedVpcNetworkInput"></a>

```python
linked_vpc_network_input: GoogleNetworkConnectivitySpokeLinkedVpcNetwork
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork">GoogleNetworkConnectivitySpokeLinkedVpcNetwork</a>

---

##### `linked_vpn_tunnels_input`<sup>Optional</sup> <a name="linked_vpn_tunnels_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedVpnTunnelsInput"></a>

```python
linked_vpn_tunnels_input: GoogleNetworkConnectivitySpokeLinkedVpnTunnels
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkConnectivitySpokeTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.hub"></a>

```python
hub: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivitySpokeConfig <a name="GoogleNetworkConnectivitySpokeConfig" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hub: str,
  location: str,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  gateway: GoogleNetworkConnectivitySpokeGateway = None,
  group: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  linked_interconnect_attachments: GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments = None,
  linked_producer_vpc_network: GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork = None,
  linked_router_appliance_instances: GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances = None,
  linked_vpc_network: GoogleNetworkConnectivitySpokeLinkedVpcNetwork = None,
  linked_vpn_tunnels: GoogleNetworkConnectivitySpokeLinkedVpnTunnels = None,
  project: str = None,
  timeouts: GoogleNetworkConnectivitySpokeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.hub">hub</a></code> | <code>str</code> | Immutable. The URI of the hub that this spoke is attached to. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.name">name</a></code> | <code>str</code> | Immutable. The name of the spoke. Spoke names must be unique. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.description">description</a></code> | <code>str</code> | An optional description of the spoke. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.gateway">gateway</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway">GoogleNetworkConnectivitySpokeGateway</a></code> | gateway block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.group">group</a></code> | <code>str</code> | The name of the group that this spoke is associated with. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#id GoogleNetworkConnectivitySpoke#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedInterconnectAttachments">linked_interconnect_attachments</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | linked_interconnect_attachments block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedProducerVpcNetwork">linked_producer_vpc_network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork">GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork</a></code> | linked_producer_vpc_network block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedRouterApplianceInstances">linked_router_appliance_instances</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | linked_router_appliance_instances block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedVpcNetwork">linked_vpc_network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork">GoogleNetworkConnectivitySpokeLinkedVpcNetwork</a></code> | linked_vpc_network block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedVpnTunnels">linked_vpn_tunnels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a></code> | linked_vpn_tunnels block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#project GoogleNetworkConnectivitySpoke#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.hub"></a>

```python
hub: str
```

- *Type:* str

Immutable. The URI of the hub that this spoke is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#hub GoogleNetworkConnectivitySpoke#hub}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#location GoogleNetworkConnectivitySpoke#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Immutable. The name of the spoke. Spoke names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#name GoogleNetworkConnectivitySpoke#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#deletion_policy GoogleNetworkConnectivitySpoke#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#description GoogleNetworkConnectivitySpoke#description}

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.gateway"></a>

```python
gateway: GoogleNetworkConnectivitySpokeGateway
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway">GoogleNetworkConnectivitySpokeGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#gateway GoogleNetworkConnectivitySpoke#gateway}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The name of the group that this spoke is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#group GoogleNetworkConnectivitySpoke#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#id GoogleNetworkConnectivitySpoke#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#labels GoogleNetworkConnectivitySpoke#labels}

---

##### `linked_interconnect_attachments`<sup>Optional</sup> <a name="linked_interconnect_attachments" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedInterconnectAttachments"></a>

```python
linked_interconnect_attachments: GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a>

linked_interconnect_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#linked_interconnect_attachments GoogleNetworkConnectivitySpoke#linked_interconnect_attachments}

---

##### `linked_producer_vpc_network`<sup>Optional</sup> <a name="linked_producer_vpc_network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedProducerVpcNetwork"></a>

```python
linked_producer_vpc_network: GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork">GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork</a>

linked_producer_vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#linked_producer_vpc_network GoogleNetworkConnectivitySpoke#linked_producer_vpc_network}

---

##### `linked_router_appliance_instances`<sup>Optional</sup> <a name="linked_router_appliance_instances" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedRouterApplianceInstances"></a>

```python
linked_router_appliance_instances: GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

linked_router_appliance_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#linked_router_appliance_instances GoogleNetworkConnectivitySpoke#linked_router_appliance_instances}

---

##### `linked_vpc_network`<sup>Optional</sup> <a name="linked_vpc_network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedVpcNetwork"></a>

```python
linked_vpc_network: GoogleNetworkConnectivitySpokeLinkedVpcNetwork
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork">GoogleNetworkConnectivitySpokeLinkedVpcNetwork</a>

linked_vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#linked_vpc_network GoogleNetworkConnectivitySpoke#linked_vpc_network}

---

##### `linked_vpn_tunnels`<sup>Optional</sup> <a name="linked_vpn_tunnels" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedVpnTunnels"></a>

```python
linked_vpn_tunnels: GoogleNetworkConnectivitySpokeLinkedVpnTunnels
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a>

linked_vpn_tunnels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#linked_vpn_tunnels GoogleNetworkConnectivitySpoke#linked_vpn_tunnels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#project GoogleNetworkConnectivitySpoke#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivitySpokeTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#timeouts GoogleNetworkConnectivitySpoke#timeouts}

---

### GoogleNetworkConnectivitySpokeGateway <a name="GoogleNetworkConnectivitySpokeGateway" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway(
  capacity: str,
  ip_range_reservations: IResolvable | typing.List[GoogleNetworkConnectivitySpokeGatewayIpRangeReservations]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway.property.capacity">capacity</a></code> | <code>str</code> | the capacity of the gateway spoke, in Gbps. Possible values: ["CAPACITY_1_GBPS", "CAPACITY_10_GBPS", "CAPACITY_100_GBPS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway.property.ipRangeReservations">ip_range_reservations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations">GoogleNetworkConnectivitySpokeGatewayIpRangeReservations</a>]</code> | ip_range_reservations block. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

the capacity of the gateway spoke, in Gbps. Possible values: ["CAPACITY_1_GBPS", "CAPACITY_10_GBPS", "CAPACITY_100_GBPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#capacity GoogleNetworkConnectivitySpoke#capacity}

---

##### `ip_range_reservations`<sup>Required</sup> <a name="ip_range_reservations" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway.property.ipRangeReservations"></a>

```python
ip_range_reservations: IResolvable | typing.List[GoogleNetworkConnectivitySpokeGatewayIpRangeReservations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations">GoogleNetworkConnectivitySpokeGatewayIpRangeReservations</a>]

ip_range_reservations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#ip_range_reservations GoogleNetworkConnectivitySpoke#ip_range_reservations}

---

### GoogleNetworkConnectivitySpokeGatewayIpRangeReservations <a name="GoogleNetworkConnectivitySpokeGatewayIpRangeReservations" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations(
  ip_range: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations.property.ipRange">ip_range</a></code> | <code>str</code> | A block of IP address ranges used to allocate supporting infrastructure for this gateway—for example, 10.1.2.0/23. The IP address block must be a /23 range. This IP address block must not overlap with subnets in any spoke or peer network that the gateway can communicate with. |

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

A block of IP address ranges used to allocate supporting infrastructure for this gateway—for example, 10.1.2.0/23. The IP address block must be a /23 range. This IP address block must not overlap with subnets in any spoke or peer network that the gateway can communicate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#ip_range GoogleNetworkConnectivitySpoke#ip_range}

---

### GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments <a name="GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments(
  site_to_site_data_transfer: bool | IResolvable,
  uris: typing.List[str],
  exclude_export_ranges: typing.List[str] = None,
  exclude_import_ranges: typing.List[str] = None,
  include_export_ranges: typing.List[str] = None,
  include_import_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.siteToSiteDataTransfer">site_to_site_data_transfer</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.uris">uris</a></code> | <code>typing.List[str]</code> | The URIs of linked interconnect attachment resources. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.excludeExportRanges">exclude_export_ranges</a></code> | <code>typing.List[str]</code> | Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.excludeImportRanges">exclude_import_ranges</a></code> | <code>typing.List[str]</code> | Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.includeExportRanges">include_export_ranges</a></code> | <code>typing.List[str]</code> | Dynamic routes fully encompassed by include export ranges are included during export to hub. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.includeImportRanges">include_import_ranges</a></code> | <code>typing.List[str]</code> | Hub routes fully encompassed by include import ranges are included during import from hub. |

---

##### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.siteToSiteDataTransfer"></a>

```python
site_to_site_data_transfer: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#site_to_site_data_transfer GoogleNetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

The URIs of linked interconnect attachment resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#uris GoogleNetworkConnectivitySpoke#uris}

---

##### `exclude_export_ranges`<sup>Optional</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.excludeExportRanges"></a>

```python
exclude_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_export_ranges GoogleNetworkConnectivitySpoke#exclude_export_ranges}

---

##### `exclude_import_ranges`<sup>Optional</sup> <a name="exclude_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.excludeImportRanges"></a>

```python
exclude_import_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_import_ranges GoogleNetworkConnectivitySpoke#exclude_import_ranges}

---

##### `include_export_ranges`<sup>Optional</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.includeExportRanges"></a>

```python
include_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Dynamic routes fully encompassed by include export ranges are included during export to hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_export_ranges GoogleNetworkConnectivitySpoke#include_export_ranges}

---

##### `include_import_ranges`<sup>Optional</sup> <a name="include_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.includeImportRanges"></a>

```python
include_import_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Hub routes fully encompassed by include import ranges are included during import from hub.

"ALL_IPV4_RANGES" or IPv4 CIDR ranges are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_import_ranges GoogleNetworkConnectivitySpoke#include_import_ranges}

---

### GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork <a name="GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork(
  network: str,
  peering: str,
  exclude_export_ranges: typing.List[str] = None,
  include_export_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork.property.network">network</a></code> | <code>str</code> | The URI of the Service Consumer VPC that the Producer VPC is peered with. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork.property.peering">peering</a></code> | <code>str</code> | The name of the VPC peering between the Service Consumer VPC and the Producer VPC (defined in the Tenant project) which is added to the NCC hub. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork.property.excludeExportRanges">exclude_export_ranges</a></code> | <code>typing.List[str]</code> | IP ranges encompassing the subnets to be excluded from peering. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork.property.includeExportRanges">include_export_ranges</a></code> | <code>typing.List[str]</code> | IP ranges allowed to be included from peering. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork.property.network"></a>

```python
network: str
```

- *Type:* str

The URI of the Service Consumer VPC that the Producer VPC is peered with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#network GoogleNetworkConnectivitySpoke#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork.property.peering"></a>

```python
peering: str
```

- *Type:* str

The name of the VPC peering between the Service Consumer VPC and the Producer VPC (defined in the Tenant project) which is added to the NCC hub.

This peering must be in ACTIVE state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#peering GoogleNetworkConnectivitySpoke#peering}

---

##### `exclude_export_ranges`<sup>Optional</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork.property.excludeExportRanges"></a>

```python
exclude_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

IP ranges encompassing the subnets to be excluded from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_export_ranges GoogleNetworkConnectivitySpoke#exclude_export_ranges}

---

##### `include_export_ranges`<sup>Optional</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork.property.includeExportRanges"></a>

```python
include_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

IP ranges allowed to be included from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_export_ranges GoogleNetworkConnectivitySpoke#include_export_ranges}

---

### GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances <a name="GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances(
  instances: IResolvable | typing.List[GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances],
  site_to_site_data_transfer: bool | IResolvable,
  exclude_export_ranges: typing.List[str] = None,
  exclude_import_ranges: typing.List[str] = None,
  include_export_ranges: typing.List[str] = None,
  include_import_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.instances">instances</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]</code> | instances block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.siteToSiteDataTransfer">site_to_site_data_transfer</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.excludeExportRanges">exclude_export_ranges</a></code> | <code>typing.List[str]</code> | Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.excludeImportRanges">exclude_import_ranges</a></code> | <code>typing.List[str]</code> | Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.includeExportRanges">include_export_ranges</a></code> | <code>typing.List[str]</code> | Dynamic routes fully encompassed by include export ranges are included during export to hub. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.includeImportRanges">include_import_ranges</a></code> | <code>typing.List[str]</code> | Hub routes fully encompassed by include import ranges are included during import from hub. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.instances"></a>

```python
instances: IResolvable | typing.List[GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#instances GoogleNetworkConnectivitySpoke#instances}

---

##### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.siteToSiteDataTransfer"></a>

```python
site_to_site_data_transfer: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#site_to_site_data_transfer GoogleNetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `exclude_export_ranges`<sup>Optional</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.excludeExportRanges"></a>

```python
exclude_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_export_ranges GoogleNetworkConnectivitySpoke#exclude_export_ranges}

---

##### `exclude_import_ranges`<sup>Optional</sup> <a name="exclude_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.excludeImportRanges"></a>

```python
exclude_import_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_import_ranges GoogleNetworkConnectivitySpoke#exclude_import_ranges}

---

##### `include_export_ranges`<sup>Optional</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.includeExportRanges"></a>

```python
include_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Dynamic routes fully encompassed by include export ranges are included during export to hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_export_ranges GoogleNetworkConnectivitySpoke#include_export_ranges}

---

##### `include_import_ranges`<sup>Optional</sup> <a name="include_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.includeImportRanges"></a>

```python
include_import_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Hub routes fully encompassed by include import ranges are included during import from hub.

"ALL_IPV4_RANGES" or IPv4 CIDR ranges are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_import_ranges GoogleNetworkConnectivitySpoke#include_import_ranges}

---

### GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances <a name="GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances(
  ip_address: str,
  virtual_machine: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.ipAddress">ip_address</a></code> | <code>str</code> | The IP address on the VM to use for peering. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.virtualMachine">virtual_machine</a></code> | <code>str</code> | The URI of the virtual machine resource. |

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The IP address on the VM to use for peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#ip_address GoogleNetworkConnectivitySpoke#ip_address}

---

##### `virtual_machine`<sup>Required</sup> <a name="virtual_machine" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.virtualMachine"></a>

```python
virtual_machine: str
```

- *Type:* str

The URI of the virtual machine resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#virtual_machine GoogleNetworkConnectivitySpoke#virtual_machine}

---

### GoogleNetworkConnectivitySpokeLinkedVpcNetwork <a name="GoogleNetworkConnectivitySpokeLinkedVpcNetwork" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork(
  uri: str,
  exclude_export_ranges: typing.List[str] = None,
  include_export_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork.property.uri">uri</a></code> | <code>str</code> | The URI of the VPC network resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork.property.excludeExportRanges">exclude_export_ranges</a></code> | <code>typing.List[str]</code> | IP ranges encompassing the subnets to be excluded from peering. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork.property.includeExportRanges">include_export_ranges</a></code> | <code>typing.List[str]</code> | IP ranges allowed to be included from peering. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI of the VPC network resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#uri GoogleNetworkConnectivitySpoke#uri}

---

##### `exclude_export_ranges`<sup>Optional</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork.property.excludeExportRanges"></a>

```python
exclude_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

IP ranges encompassing the subnets to be excluded from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_export_ranges GoogleNetworkConnectivitySpoke#exclude_export_ranges}

---

##### `include_export_ranges`<sup>Optional</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork.property.includeExportRanges"></a>

```python
include_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

IP ranges allowed to be included from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_export_ranges GoogleNetworkConnectivitySpoke#include_export_ranges}

---

### GoogleNetworkConnectivitySpokeLinkedVpnTunnels <a name="GoogleNetworkConnectivitySpokeLinkedVpnTunnels" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels(
  site_to_site_data_transfer: bool | IResolvable,
  uris: typing.List[str],
  exclude_export_ranges: typing.List[str] = None,
  exclude_import_ranges: typing.List[str] = None,
  include_export_ranges: typing.List[str] = None,
  include_import_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.siteToSiteDataTransfer">site_to_site_data_transfer</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.uris">uris</a></code> | <code>typing.List[str]</code> | The URIs of linked VPN tunnel resources. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.excludeExportRanges">exclude_export_ranges</a></code> | <code>typing.List[str]</code> | Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.excludeImportRanges">exclude_import_ranges</a></code> | <code>typing.List[str]</code> | Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.includeExportRanges">include_export_ranges</a></code> | <code>typing.List[str]</code> | Dynamic routes fully encompassed by include export ranges are included during export to hub. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.includeImportRanges">include_import_ranges</a></code> | <code>typing.List[str]</code> | Hub routes fully encompassed by include import ranges are included during import from hub. |

---

##### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.siteToSiteDataTransfer"></a>

```python
site_to_site_data_transfer: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#site_to_site_data_transfer GoogleNetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

The URIs of linked VPN tunnel resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#uris GoogleNetworkConnectivitySpoke#uris}

---

##### `exclude_export_ranges`<sup>Optional</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.excludeExportRanges"></a>

```python
exclude_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_export_ranges GoogleNetworkConnectivitySpoke#exclude_export_ranges}

---

##### `exclude_import_ranges`<sup>Optional</sup> <a name="exclude_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.excludeImportRanges"></a>

```python
exclude_import_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#exclude_import_ranges GoogleNetworkConnectivitySpoke#exclude_import_ranges}

---

##### `include_export_ranges`<sup>Optional</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.includeExportRanges"></a>

```python
include_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Dynamic routes fully encompassed by include export ranges are included during export to hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_export_ranges GoogleNetworkConnectivitySpoke#include_export_ranges}

---

##### `include_import_ranges`<sup>Optional</sup> <a name="include_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.includeImportRanges"></a>

```python
include_import_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Hub routes fully encompassed by include import ranges are included during import from hub.

"ALL_IPV4_RANGES" or IPv4 CIDR ranges are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#include_import_ranges GoogleNetworkConnectivitySpoke#include_import_ranges}

---

### GoogleNetworkConnectivitySpokeReasons <a name="GoogleNetworkConnectivitySpokeReasons" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasons"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasons.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasons()
```


### GoogleNetworkConnectivitySpokeTimeouts <a name="GoogleNetworkConnectivitySpokeTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#create GoogleNetworkConnectivitySpoke#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#delete GoogleNetworkConnectivitySpoke#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#update GoogleNetworkConnectivitySpoke#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#create GoogleNetworkConnectivitySpoke#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#delete GoogleNetworkConnectivitySpoke#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_connectivity_spoke#update GoogleNetworkConnectivitySpoke#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList <a name="GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations">GoogleNetworkConnectivitySpokeGatewayIpRangeReservations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleNetworkConnectivitySpokeGatewayIpRangeReservations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations">GoogleNetworkConnectivitySpokeGatewayIpRangeReservations</a>]

---


### GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference <a name="GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.property.ipRangeInput">ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.property.ipRange">ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations">GoogleNetworkConnectivitySpokeGatewayIpRangeReservations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_range_input`<sup>Optional</sup> <a name="ip_range_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.property.ipRangeInput"></a>

```python
ip_range_input: str
```

- *Type:* str

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkConnectivitySpokeGatewayIpRangeReservations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations">GoogleNetworkConnectivitySpokeGatewayIpRangeReservations</a>

---


### GoogleNetworkConnectivitySpokeGatewayOutputReference <a name="GoogleNetworkConnectivitySpokeGatewayOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.putIpRangeReservations">put_ip_range_reservations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_range_reservations` <a name="put_ip_range_reservations" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.putIpRangeReservations"></a>

```python
def put_ip_range_reservations(
  value: IResolvable | typing.List[GoogleNetworkConnectivitySpokeGatewayIpRangeReservations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.putIpRangeReservations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations">GoogleNetworkConnectivitySpokeGatewayIpRangeReservations</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.ipRangeReservations">ip_range_reservations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList">GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.routers">routers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.capacityInput">capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.ipRangeReservationsInput">ip_range_reservations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations">GoogleNetworkConnectivitySpokeGatewayIpRangeReservations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.capacity">capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway">GoogleNetworkConnectivitySpokeGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_range_reservations`<sup>Required</sup> <a name="ip_range_reservations" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.ipRangeReservations"></a>

```python
ip_range_reservations: GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList">GoogleNetworkConnectivitySpokeGatewayIpRangeReservationsList</a>

---

##### `routers`<sup>Required</sup> <a name="routers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.routers"></a>

```python
routers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.capacityInput"></a>

```python
capacity_input: str
```

- *Type:* str

---

##### `ip_range_reservations_input`<sup>Optional</sup> <a name="ip_range_reservations_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.ipRangeReservationsInput"></a>

```python
ip_range_reservations_input: IResolvable | typing.List[GoogleNetworkConnectivitySpokeGatewayIpRangeReservations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayIpRangeReservations">GoogleNetworkConnectivitySpokeGatewayIpRangeReservations</a>]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGatewayOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivitySpokeGateway
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeGateway">GoogleNetworkConnectivitySpokeGateway</a>

---


### GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference <a name="GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resetExcludeExportRanges">reset_exclude_export_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resetExcludeImportRanges">reset_exclude_import_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resetIncludeExportRanges">reset_include_export_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resetIncludeImportRanges">reset_include_import_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_export_ranges` <a name="reset_exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resetExcludeExportRanges"></a>

```python
def reset_exclude_export_ranges() -> None
```

##### `reset_exclude_import_ranges` <a name="reset_exclude_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resetExcludeImportRanges"></a>

```python
def reset_exclude_import_ranges() -> None
```

##### `reset_include_export_ranges` <a name="reset_include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resetIncludeExportRanges"></a>

```python
def reset_include_export_ranges() -> None
```

##### `reset_include_import_ranges` <a name="reset_include_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resetIncludeImportRanges"></a>

```python
def reset_include_import_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.excludeExportRangesInput">exclude_export_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.excludeImportRangesInput">exclude_import_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.includeExportRangesInput">include_export_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.includeImportRangesInput">include_import_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransferInput">site_to_site_data_transfer_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.urisInput">uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.excludeExportRanges">exclude_export_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.excludeImportRanges">exclude_import_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.includeExportRanges">include_export_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.includeImportRanges">include_import_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransfer">site_to_site_data_transfer</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.uris">uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_export_ranges_input`<sup>Optional</sup> <a name="exclude_export_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.excludeExportRangesInput"></a>

```python
exclude_export_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_import_ranges_input`<sup>Optional</sup> <a name="exclude_import_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.excludeImportRangesInput"></a>

```python
exclude_import_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_export_ranges_input`<sup>Optional</sup> <a name="include_export_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.includeExportRangesInput"></a>

```python
include_export_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_import_ranges_input`<sup>Optional</sup> <a name="include_import_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.includeImportRangesInput"></a>

```python
include_import_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_to_site_data_transfer_input`<sup>Optional</sup> <a name="site_to_site_data_transfer_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransferInput"></a>

```python
site_to_site_data_transfer_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `uris_input`<sup>Optional</sup> <a name="uris_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.urisInput"></a>

```python
uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_export_ranges`<sup>Required</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.excludeExportRanges"></a>

```python
exclude_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_import_ranges`<sup>Required</sup> <a name="exclude_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.excludeImportRanges"></a>

```python
exclude_import_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_export_ranges`<sup>Required</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.includeExportRanges"></a>

```python
include_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_import_ranges`<sup>Required</sup> <a name="include_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.includeImportRanges"></a>

```python
include_import_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransfer"></a>

```python
site_to_site_data_transfer: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---


### GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference <a name="GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resetExcludeExportRanges">reset_exclude_export_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resetIncludeExportRanges">reset_include_export_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_export_ranges` <a name="reset_exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resetExcludeExportRanges"></a>

```python
def reset_exclude_export_ranges() -> None
```

##### `reset_include_export_ranges` <a name="reset_include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resetIncludeExportRanges"></a>

```python
def reset_include_export_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.producerNetwork">producer_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.excludeExportRangesInput">exclude_export_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.includeExportRangesInput">include_export_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.peeringInput">peering_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.excludeExportRanges">exclude_export_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.includeExportRanges">include_export_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.peering">peering</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork">GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `producer_network`<sup>Required</sup> <a name="producer_network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.producerNetwork"></a>

```python
producer_network: str
```

- *Type:* str

---

##### `exclude_export_ranges_input`<sup>Optional</sup> <a name="exclude_export_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.excludeExportRangesInput"></a>

```python
exclude_export_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_export_ranges_input`<sup>Optional</sup> <a name="include_export_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.includeExportRangesInput"></a>

```python
include_export_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `peering_input`<sup>Optional</sup> <a name="peering_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.peeringInput"></a>

```python
peering_input: str
```

- *Type:* str

---

##### `exclude_export_ranges`<sup>Required</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.excludeExportRanges"></a>

```python
exclude_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_export_ranges`<sup>Required</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.includeExportRanges"></a>

```python
include_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.peering"></a>

```python
peering: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork">GoogleNetworkConnectivitySpokeLinkedProducerVpcNetwork</a>

---


### GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList <a name="GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]

---


### GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference <a name="GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachineInput">virtual_machine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachine">virtual_machine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `virtual_machine_input`<sup>Optional</sup> <a name="virtual_machine_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachineInput"></a>

```python
virtual_machine_input: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `virtual_machine`<sup>Required</sup> <a name="virtual_machine" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachine"></a>

```python
virtual_machine: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>

---


### GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference <a name="GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances">put_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resetExcludeExportRanges">reset_exclude_export_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resetExcludeImportRanges">reset_exclude_import_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resetIncludeExportRanges">reset_include_export_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resetIncludeImportRanges">reset_include_import_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_instances` <a name="put_instances" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances"></a>

```python
def put_instances(
  value: IResolvable | typing.List[GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]

---

##### `reset_exclude_export_ranges` <a name="reset_exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resetExcludeExportRanges"></a>

```python
def reset_exclude_export_ranges() -> None
```

##### `reset_exclude_import_ranges` <a name="reset_exclude_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resetExcludeImportRanges"></a>

```python
def reset_exclude_import_ranges() -> None
```

##### `reset_include_export_ranges` <a name="reset_include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resetIncludeExportRanges"></a>

```python
def reset_include_export_ranges() -> None
```

##### `reset_include_import_ranges` <a name="reset_include_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resetIncludeImportRanges"></a>

```python
def reset_include_import_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instances">instances</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.excludeExportRangesInput">exclude_export_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.excludeImportRangesInput">exclude_import_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.includeExportRangesInput">include_export_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.includeImportRangesInput">include_import_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instancesInput">instances_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransferInput">site_to_site_data_transfer_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.excludeExportRanges">exclude_export_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.excludeImportRanges">exclude_import_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.includeExportRanges">include_export_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.includeImportRanges">include_import_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransfer">site_to_site_data_transfer</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instances"></a>

```python
instances: GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList</a>

---

##### `exclude_export_ranges_input`<sup>Optional</sup> <a name="exclude_export_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.excludeExportRangesInput"></a>

```python
exclude_export_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_import_ranges_input`<sup>Optional</sup> <a name="exclude_import_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.excludeImportRangesInput"></a>

```python
exclude_import_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_export_ranges_input`<sup>Optional</sup> <a name="include_export_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.includeExportRangesInput"></a>

```python
include_export_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_import_ranges_input`<sup>Optional</sup> <a name="include_import_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.includeImportRangesInput"></a>

```python
include_import_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instancesInput"></a>

```python
instances_input: IResolvable | typing.List[GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]

---

##### `site_to_site_data_transfer_input`<sup>Optional</sup> <a name="site_to_site_data_transfer_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransferInput"></a>

```python
site_to_site_data_transfer_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude_export_ranges`<sup>Required</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.excludeExportRanges"></a>

```python
exclude_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_import_ranges`<sup>Required</sup> <a name="exclude_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.excludeImportRanges"></a>

```python
exclude_import_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_export_ranges`<sup>Required</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.includeExportRanges"></a>

```python
include_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_import_ranges`<sup>Required</sup> <a name="include_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.includeImportRanges"></a>

```python
include_import_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransfer"></a>

```python
site_to_site_data_transfer: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---


### GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference <a name="GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resetExcludeExportRanges">reset_exclude_export_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resetIncludeExportRanges">reset_include_export_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_export_ranges` <a name="reset_exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resetExcludeExportRanges"></a>

```python
def reset_exclude_export_ranges() -> None
```

##### `reset_include_export_ranges` <a name="reset_include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resetIncludeExportRanges"></a>

```python
def reset_include_export_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRangesInput">exclude_export_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.includeExportRangesInput">include_export_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRanges">exclude_export_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.includeExportRanges">include_export_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork">GoogleNetworkConnectivitySpokeLinkedVpcNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_export_ranges_input`<sup>Optional</sup> <a name="exclude_export_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRangesInput"></a>

```python
exclude_export_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_export_ranges_input`<sup>Optional</sup> <a name="include_export_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.includeExportRangesInput"></a>

```python
include_export_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `exclude_export_ranges`<sup>Required</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRanges"></a>

```python
exclude_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_export_ranges`<sup>Required</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.includeExportRanges"></a>

```python
include_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivitySpokeLinkedVpcNetwork
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpcNetwork">GoogleNetworkConnectivitySpokeLinkedVpcNetwork</a>

---


### GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference <a name="GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resetExcludeExportRanges">reset_exclude_export_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resetExcludeImportRanges">reset_exclude_import_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resetIncludeExportRanges">reset_include_export_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resetIncludeImportRanges">reset_include_import_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_export_ranges` <a name="reset_exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resetExcludeExportRanges"></a>

```python
def reset_exclude_export_ranges() -> None
```

##### `reset_exclude_import_ranges` <a name="reset_exclude_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resetExcludeImportRanges"></a>

```python
def reset_exclude_import_ranges() -> None
```

##### `reset_include_export_ranges` <a name="reset_include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resetIncludeExportRanges"></a>

```python
def reset_include_export_ranges() -> None
```

##### `reset_include_import_ranges` <a name="reset_include_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resetIncludeImportRanges"></a>

```python
def reset_include_import_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.excludeExportRangesInput">exclude_export_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.excludeImportRangesInput">exclude_import_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.includeExportRangesInput">include_export_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.includeImportRangesInput">include_import_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransferInput">site_to_site_data_transfer_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.urisInput">uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.excludeExportRanges">exclude_export_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.excludeImportRanges">exclude_import_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.includeExportRanges">include_export_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.includeImportRanges">include_import_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransfer">site_to_site_data_transfer</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.uris">uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_export_ranges_input`<sup>Optional</sup> <a name="exclude_export_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.excludeExportRangesInput"></a>

```python
exclude_export_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_import_ranges_input`<sup>Optional</sup> <a name="exclude_import_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.excludeImportRangesInput"></a>

```python
exclude_import_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_export_ranges_input`<sup>Optional</sup> <a name="include_export_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.includeExportRangesInput"></a>

```python
include_export_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_import_ranges_input`<sup>Optional</sup> <a name="include_import_ranges_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.includeImportRangesInput"></a>

```python
include_import_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_to_site_data_transfer_input`<sup>Optional</sup> <a name="site_to_site_data_transfer_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransferInput"></a>

```python
site_to_site_data_transfer_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `uris_input`<sup>Optional</sup> <a name="uris_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.urisInput"></a>

```python
uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_export_ranges`<sup>Required</sup> <a name="exclude_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.excludeExportRanges"></a>

```python
exclude_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_import_ranges`<sup>Required</sup> <a name="exclude_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.excludeImportRanges"></a>

```python
exclude_import_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_export_ranges`<sup>Required</sup> <a name="include_export_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.includeExportRanges"></a>

```python
include_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_import_ranges`<sup>Required</sup> <a name="include_import_ranges" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.includeImportRanges"></a>

```python
include_import_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransfer"></a>

```python
site_to_site_data_transfer: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivitySpokeLinkedVpnTunnels
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a>

---


### GoogleNetworkConnectivitySpokeReasonsList <a name="GoogleNetworkConnectivitySpokeReasonsList" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkConnectivitySpokeReasonsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleNetworkConnectivitySpokeReasonsOutputReference <a name="GoogleNetworkConnectivitySpokeReasonsOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.property.userDetails">user_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasons">GoogleNetworkConnectivitySpokeReasons</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `user_details`<sup>Required</sup> <a name="user_details" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.property.userDetails"></a>

```python
user_details: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasonsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivitySpokeReasons
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeReasons">GoogleNetworkConnectivitySpokeReasons</a>

---


### GoogleNetworkConnectivitySpokeTimeoutsOutputReference <a name="GoogleNetworkConnectivitySpokeTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_spoke

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkConnectivitySpokeTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a>

---



