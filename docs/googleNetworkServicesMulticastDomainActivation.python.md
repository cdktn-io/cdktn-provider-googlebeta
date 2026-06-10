# `googleNetworkServicesMulticastDomainActivation` Submodule <a name="`googleNetworkServicesMulticastDomainActivation` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastDomainActivation <a name="GoogleNetworkServicesMulticastDomainActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation google_network_services_multicast_domain_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_activation

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation(
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
  multicast_domain: str,
  multicast_domain_activation_id: str,
  deletion_policy: str = None,
  description: str = None,
  disable_placement_policy: bool | IResolvable = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesMulticastDomainActivationTimeouts = None,
  traffic_spec: GoogleNetworkServicesMulticastDomainActivationTrafficSpec = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.multicastDomain">multicast_domain</a></code> | <code>str</code> | The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.multicastDomainActivationId">multicast_domain_activation_id</a></code> | <code>str</code> | A unique name for the multicast domain activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional text description of the multicast domain activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.disablePlacementPolicy">disable_placement_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | Option to allow disabling placement policy for multicast infrastructure. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#id GoogleNetworkServicesMulticastDomainActivation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#project GoogleNetworkServicesMulticastDomainActivation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.trafficSpec">traffic_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a></code> | traffic_spec block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#location GoogleNetworkServicesMulticastDomainActivation#location}

---

##### `multicast_domain`<sup>Required</sup> <a name="multicast_domain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.multicastDomain"></a>

- *Type:* str

The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#multicast_domain GoogleNetworkServicesMulticastDomainActivation#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicast_domain_activation_id`<sup>Required</sup> <a name="multicast_domain_activation_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.multicastDomainActivationId"></a>

- *Type:* str

A unique name for the multicast domain activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#multicast_domain_activation_id GoogleNetworkServicesMulticastDomainActivation#multicast_domain_activation_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#deletion_policy GoogleNetworkServicesMulticastDomainActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.description"></a>

- *Type:* str

An optional text description of the multicast domain activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#description GoogleNetworkServicesMulticastDomainActivation#description}

---

##### `disable_placement_policy`<sup>Optional</sup> <a name="disable_placement_policy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.disablePlacementPolicy"></a>

- *Type:* bool | cdktn.IResolvable

Option to allow disabling placement policy for multicast infrastructure.

Only applicable if the activation is for a domain associating with a
multicast domain group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#disable_placement_policy GoogleNetworkServicesMulticastDomainActivation#disable_placement_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#id GoogleNetworkServicesMulticastDomainActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#labels GoogleNetworkServicesMulticastDomainActivation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#project GoogleNetworkServicesMulticastDomainActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#timeouts GoogleNetworkServicesMulticastDomainActivation#timeouts}

---

##### `traffic_spec`<sup>Optional</sup> <a name="traffic_spec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.trafficSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a>

traffic_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#traffic_spec GoogleNetworkServicesMulticastDomainActivation#traffic_spec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTrafficSpec">put_traffic_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy">reset_disable_placement_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetTrafficSpec">reset_traffic_spec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#create GoogleNetworkServicesMulticastDomainActivation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#delete GoogleNetworkServicesMulticastDomainActivation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#update GoogleNetworkServicesMulticastDomainActivation#update}.

---

##### `put_traffic_spec` <a name="put_traffic_spec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTrafficSpec"></a>

```python
def put_traffic_spec(
  aggr_egress_pps: str = None,
  aggr_ingress_pps: str = None,
  avg_packet_size: typing.Union[int, float] = None,
  max_per_group_ingress_pps: str = None,
  max_per_group_subscribers: str = None
) -> None
```

###### `aggr_egress_pps`<sup>Optional</sup> <a name="aggr_egress_pps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTrafficSpec.parameter.aggrEgressPps"></a>

- *Type:* str

Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#aggr_egress_pps GoogleNetworkServicesMulticastDomainActivation#aggr_egress_pps}

---

###### `aggr_ingress_pps`<sup>Optional</sup> <a name="aggr_ingress_pps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTrafficSpec.parameter.aggrIngressPps"></a>

- *Type:* str

Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#aggr_ingress_pps GoogleNetworkServicesMulticastDomainActivation#aggr_ingress_pps}

---

###### `avg_packet_size`<sup>Optional</sup> <a name="avg_packet_size" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTrafficSpec.parameter.avgPacketSize"></a>

- *Type:* typing.Union[int, float]

Average packet size (Default to 512 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#avg_packet_size GoogleNetworkServicesMulticastDomainActivation#avg_packet_size}

---

###### `max_per_group_ingress_pps`<sup>Optional</sup> <a name="max_per_group_ingress_pps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTrafficSpec.parameter.maxPerGroupIngressPps"></a>

- *Type:* str

Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#max_per_group_ingress_pps GoogleNetworkServicesMulticastDomainActivation#max_per_group_ingress_pps}

---

###### `max_per_group_subscribers`<sup>Optional</sup> <a name="max_per_group_subscribers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTrafficSpec.parameter.maxPerGroupSubscribers"></a>

- *Type:* str

Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#max_per_group_subscribers GoogleNetworkServicesMulticastDomainActivation#max_per_group_subscribers}

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_placement_policy` <a name="reset_disable_placement_policy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy"></a>

```python
def reset_disable_placement_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_traffic_spec` <a name="reset_traffic_spec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetTrafficSpec"></a>

```python
def reset_traffic_spec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_activation

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_activation

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_activation

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_activation

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesMulticastDomainActivation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesMulticastDomainActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastDomainActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.adminNetwork">admin_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList">GoogleNetworkServicesMulticastDomainActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.trafficSpec">traffic_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference">GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput">disable_placement_policy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput">multicast_domain_activation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainInput">multicast_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.trafficSpecInput">traffic_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.disablePlacementPolicy">disable_placement_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomain">multicast_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainActivationId">multicast_domain_activation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `admin_network`<sup>Required</sup> <a name="admin_network" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.adminNetwork"></a>

```python
admin_network: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.state"></a>

```python
state: GoogleNetworkServicesMulticastDomainActivationStateList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList">GoogleNetworkServicesMulticastDomainActivationStateList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference</a>

---

##### `traffic_spec`<sup>Required</sup> <a name="traffic_spec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.trafficSpec"></a>

```python
traffic_spec: GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference">GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_placement_policy_input`<sup>Optional</sup> <a name="disable_placement_policy_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput"></a>

```python
disable_placement_policy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `multicast_domain_activation_id_input`<sup>Optional</sup> <a name="multicast_domain_activation_id_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput"></a>

```python
multicast_domain_activation_id_input: str
```

- *Type:* str

---

##### `multicast_domain_input`<sup>Optional</sup> <a name="multicast_domain_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainInput"></a>

```python
multicast_domain_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkServicesMulticastDomainActivationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a>

---

##### `traffic_spec_input`<sup>Optional</sup> <a name="traffic_spec_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.trafficSpecInput"></a>

```python
traffic_spec_input: GoogleNetworkServicesMulticastDomainActivationTrafficSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_placement_policy`<sup>Required</sup> <a name="disable_placement_policy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.disablePlacementPolicy"></a>

```python
disable_placement_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `multicast_domain`<sup>Required</sup> <a name="multicast_domain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomain"></a>

```python
multicast_domain: str
```

- *Type:* str

---

##### `multicast_domain_activation_id`<sup>Required</sup> <a name="multicast_domain_activation_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainActivationId"></a>

```python
multicast_domain_activation_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastDomainActivationConfig <a name="GoogleNetworkServicesMulticastDomainActivationConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_activation

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  multicast_domain: str,
  multicast_domain_activation_id: str,
  deletion_policy: str = None,
  description: str = None,
  disable_placement_policy: bool | IResolvable = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesMulticastDomainActivationTimeouts = None,
  traffic_spec: GoogleNetworkServicesMulticastDomainActivationTrafficSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.multicastDomain">multicast_domain</a></code> | <code>str</code> | The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId">multicast_domain_activation_id</a></code> | <code>str</code> | A unique name for the multicast domain activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.description">description</a></code> | <code>str</code> | An optional text description of the multicast domain activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy">disable_placement_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | Option to allow disabling placement policy for multicast infrastructure. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#id GoogleNetworkServicesMulticastDomainActivation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#project GoogleNetworkServicesMulticastDomainActivation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.trafficSpec">traffic_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a></code> | traffic_spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#location GoogleNetworkServicesMulticastDomainActivation#location}

---

##### `multicast_domain`<sup>Required</sup> <a name="multicast_domain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.multicastDomain"></a>

```python
multicast_domain: str
```

- *Type:* str

The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#multicast_domain GoogleNetworkServicesMulticastDomainActivation#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicast_domain_activation_id`<sup>Required</sup> <a name="multicast_domain_activation_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId"></a>

```python
multicast_domain_activation_id: str
```

- *Type:* str

A unique name for the multicast domain activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#multicast_domain_activation_id GoogleNetworkServicesMulticastDomainActivation#multicast_domain_activation_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#deletion_policy GoogleNetworkServicesMulticastDomainActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional text description of the multicast domain activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#description GoogleNetworkServicesMulticastDomainActivation#description}

---

##### `disable_placement_policy`<sup>Optional</sup> <a name="disable_placement_policy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy"></a>

```python
disable_placement_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Option to allow disabling placement policy for multicast infrastructure.

Only applicable if the activation is for a domain associating with a
multicast domain group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#disable_placement_policy GoogleNetworkServicesMulticastDomainActivation#disable_placement_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#id GoogleNetworkServicesMulticastDomainActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#labels GoogleNetworkServicesMulticastDomainActivation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#project GoogleNetworkServicesMulticastDomainActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesMulticastDomainActivationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#timeouts GoogleNetworkServicesMulticastDomainActivation#timeouts}

---

##### `traffic_spec`<sup>Optional</sup> <a name="traffic_spec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.trafficSpec"></a>

```python
traffic_spec: GoogleNetworkServicesMulticastDomainActivationTrafficSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a>

traffic_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#traffic_spec GoogleNetworkServicesMulticastDomainActivation#traffic_spec}

---

### GoogleNetworkServicesMulticastDomainActivationState <a name="GoogleNetworkServicesMulticastDomainActivationState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_activation

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState()
```


### GoogleNetworkServicesMulticastDomainActivationTimeouts <a name="GoogleNetworkServicesMulticastDomainActivationTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_activation

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#create GoogleNetworkServicesMulticastDomainActivation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#delete GoogleNetworkServicesMulticastDomainActivation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#update GoogleNetworkServicesMulticastDomainActivation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#create GoogleNetworkServicesMulticastDomainActivation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#delete GoogleNetworkServicesMulticastDomainActivation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#update GoogleNetworkServicesMulticastDomainActivation#update}.

---

### GoogleNetworkServicesMulticastDomainActivationTrafficSpec <a name="GoogleNetworkServicesMulticastDomainActivationTrafficSpec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_activation

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec(
  aggr_egress_pps: str = None,
  aggr_ingress_pps: str = None,
  avg_packet_size: typing.Union[int, float] = None,
  max_per_group_ingress_pps: str = None,
  max_per_group_subscribers: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps">aggr_egress_pps</a></code> | <code>str</code> | Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps">aggr_ingress_pps</a></code> | <code>str</code> | Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize">avg_packet_size</a></code> | <code>typing.Union[int, float]</code> | Average packet size (Default to 512 bytes). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps">max_per_group_ingress_pps</a></code> | <code>str</code> | Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers">max_per_group_subscribers</a></code> | <code>str</code> | Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps). |

---

##### `aggr_egress_pps`<sup>Optional</sup> <a name="aggr_egress_pps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps"></a>

```python
aggr_egress_pps: str
```

- *Type:* str

Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#aggr_egress_pps GoogleNetworkServicesMulticastDomainActivation#aggr_egress_pps}

---

##### `aggr_ingress_pps`<sup>Optional</sup> <a name="aggr_ingress_pps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps"></a>

```python
aggr_ingress_pps: str
```

- *Type:* str

Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#aggr_ingress_pps GoogleNetworkServicesMulticastDomainActivation#aggr_ingress_pps}

---

##### `avg_packet_size`<sup>Optional</sup> <a name="avg_packet_size" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize"></a>

```python
avg_packet_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Average packet size (Default to 512 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#avg_packet_size GoogleNetworkServicesMulticastDomainActivation#avg_packet_size}

---

##### `max_per_group_ingress_pps`<sup>Optional</sup> <a name="max_per_group_ingress_pps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps"></a>

```python
max_per_group_ingress_pps: str
```

- *Type:* str

Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#max_per_group_ingress_pps GoogleNetworkServicesMulticastDomainActivation#max_per_group_ingress_pps}

---

##### `max_per_group_subscribers`<sup>Optional</sup> <a name="max_per_group_subscribers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers"></a>

```python
max_per_group_subscribers: str
```

- *Type:* str

Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_services_multicast_domain_activation#max_per_group_subscribers GoogleNetworkServicesMulticastDomainActivation#max_per_group_subscribers}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastDomainActivationStateList <a name="GoogleNetworkServicesMulticastDomainActivationStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_activation

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesMulticastDomainActivationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleNetworkServicesMulticastDomainActivationStateOutputReference <a name="GoogleNetworkServicesMulticastDomainActivationStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_activation

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState">GoogleNetworkServicesMulticastDomainActivationState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesMulticastDomainActivationState
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState">GoogleNetworkServicesMulticastDomainActivationState</a>

---


### GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_activation

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkServicesMulticastDomainActivationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a>

---


### GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference <a name="GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_activation

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps">reset_aggr_egress_pps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps">reset_aggr_ingress_pps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize">reset_avg_packet_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps">reset_max_per_group_ingress_pps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers">reset_max_per_group_subscribers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggr_egress_pps` <a name="reset_aggr_egress_pps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps"></a>

```python
def reset_aggr_egress_pps() -> None
```

##### `reset_aggr_ingress_pps` <a name="reset_aggr_ingress_pps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps"></a>

```python
def reset_aggr_ingress_pps() -> None
```

##### `reset_avg_packet_size` <a name="reset_avg_packet_size" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize"></a>

```python
def reset_avg_packet_size() -> None
```

##### `reset_max_per_group_ingress_pps` <a name="reset_max_per_group_ingress_pps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps"></a>

```python
def reset_max_per_group_ingress_pps() -> None
```

##### `reset_max_per_group_subscribers` <a name="reset_max_per_group_subscribers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers"></a>

```python
def reset_max_per_group_subscribers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput">aggr_egress_pps_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput">aggr_ingress_pps_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput">avg_packet_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput">max_per_group_ingress_pps_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput">max_per_group_subscribers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps">aggr_egress_pps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps">aggr_ingress_pps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize">avg_packet_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps">max_per_group_ingress_pps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers">max_per_group_subscribers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggr_egress_pps_input`<sup>Optional</sup> <a name="aggr_egress_pps_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput"></a>

```python
aggr_egress_pps_input: str
```

- *Type:* str

---

##### `aggr_ingress_pps_input`<sup>Optional</sup> <a name="aggr_ingress_pps_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput"></a>

```python
aggr_ingress_pps_input: str
```

- *Type:* str

---

##### `avg_packet_size_input`<sup>Optional</sup> <a name="avg_packet_size_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput"></a>

```python
avg_packet_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_per_group_ingress_pps_input`<sup>Optional</sup> <a name="max_per_group_ingress_pps_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput"></a>

```python
max_per_group_ingress_pps_input: str
```

- *Type:* str

---

##### `max_per_group_subscribers_input`<sup>Optional</sup> <a name="max_per_group_subscribers_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput"></a>

```python
max_per_group_subscribers_input: str
```

- *Type:* str

---

##### `aggr_egress_pps`<sup>Required</sup> <a name="aggr_egress_pps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps"></a>

```python
aggr_egress_pps: str
```

- *Type:* str

---

##### `aggr_ingress_pps`<sup>Required</sup> <a name="aggr_ingress_pps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps"></a>

```python
aggr_ingress_pps: str
```

- *Type:* str

---

##### `avg_packet_size`<sup>Required</sup> <a name="avg_packet_size" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize"></a>

```python
avg_packet_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_per_group_ingress_pps`<sup>Required</sup> <a name="max_per_group_ingress_pps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps"></a>

```python
max_per_group_ingress_pps: str
```

- *Type:* str

---

##### `max_per_group_subscribers`<sup>Required</sup> <a name="max_per_group_subscribers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers"></a>

```python
max_per_group_subscribers: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesMulticastDomainActivationTrafficSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a>

---



