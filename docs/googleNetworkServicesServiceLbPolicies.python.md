# `googleNetworkServicesServiceLbPolicies` Submodule <a name="`googleNetworkServicesServiceLbPolicies` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesServiceLbPolicies <a name="GoogleNetworkServicesServiceLbPolicies" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies google_network_services_service_lb_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies(
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
  auto_capacity_drain: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain = None,
  deletion_policy: str = None,
  description: str = None,
  failover_config: GoogleNetworkServicesServiceLbPoliciesFailoverConfig = None,
  id: str = None,
  isolation_config: GoogleNetworkServicesServiceLbPoliciesIsolationConfig = None,
  labels: typing.Mapping[str] = None,
  load_balancing_algorithm: str = None,
  project: str = None,
  timeouts: GoogleNetworkServicesServiceLbPoliciesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the service lb policy. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.autoCapacityDrain">auto_capacity_drain</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | auto_capacity_drain block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.failoverConfig">failover_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a></code> | failover_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#id GoogleNetworkServicesServiceLbPolicies#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.isolationConfig">isolation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig">GoogleNetworkServicesServiceLbPoliciesIsolationConfig</a></code> | isolation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the ServiceLbPolicy resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.loadBalancingAlgorithm">load_balancing_algorithm</a></code> | <code>str</code> | The type of load balancing algorithm to be used. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#project GoogleNetworkServicesServiceLbPolicies#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.location"></a>

- *Type:* str

The location of the service lb policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#location GoogleNetworkServicesServiceLbPolicies#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.name"></a>

- *Type:* str

Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#name GoogleNetworkServicesServiceLbPolicies#name}

---

##### `auto_capacity_drain`<sup>Optional</sup> <a name="auto_capacity_drain" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.autoCapacityDrain"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

auto_capacity_drain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#auto_capacity_drain GoogleNetworkServicesServiceLbPolicies#auto_capacity_drain}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#deletion_policy GoogleNetworkServicesServiceLbPolicies#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#description GoogleNetworkServicesServiceLbPolicies#description}

---

##### `failover_config`<sup>Optional</sup> <a name="failover_config" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.failoverConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#failover_config GoogleNetworkServicesServiceLbPolicies#failover_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#id GoogleNetworkServicesServiceLbPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolation_config`<sup>Optional</sup> <a name="isolation_config" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.isolationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig">GoogleNetworkServicesServiceLbPoliciesIsolationConfig</a>

isolation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#isolation_config GoogleNetworkServicesServiceLbPolicies#isolation_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the ServiceLbPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#labels GoogleNetworkServicesServiceLbPolicies#labels}

---

##### `load_balancing_algorithm`<sup>Optional</sup> <a name="load_balancing_algorithm" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.loadBalancingAlgorithm"></a>

- *Type:* str

The type of load balancing algorithm to be used.

The default behavior is WATERFALL_BY_REGION. Possible values: ["SPRAY_TO_REGION", "SPRAY_TO_WORLD", "WATERFALL_BY_REGION", "WATERFALL_BY_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#load_balancing_algorithm GoogleNetworkServicesServiceLbPolicies#load_balancing_algorithm}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#project GoogleNetworkServicesServiceLbPolicies#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#timeouts GoogleNetworkServicesServiceLbPolicies#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putAutoCapacityDrain">put_auto_capacity_drain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putFailoverConfig">put_failover_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putIsolationConfig">put_isolation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetAutoCapacityDrain">reset_auto_capacity_drain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetFailoverConfig">reset_failover_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetIsolationConfig">reset_isolation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm">reset_load_balancing_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_capacity_drain` <a name="put_auto_capacity_drain" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putAutoCapacityDrain"></a>

```python
def put_auto_capacity_drain(
  enable: bool | IResolvable = None
) -> None
```

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putAutoCapacityDrain.parameter.enable"></a>

- *Type:* bool | cdktn.IResolvable

Optional.

If set to 'True', an unhealthy MIG/NEG will be set as drained. - An MIG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the MIG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#enable GoogleNetworkServicesServiceLbPolicies#enable}

---

##### `put_failover_config` <a name="put_failover_config" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putFailoverConfig"></a>

```python
def put_failover_config(
  failover_health_threshold: typing.Union[int, float]
) -> None
```

###### `failover_health_threshold`<sup>Required</sup> <a name="failover_health_threshold" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putFailoverConfig.parameter.failoverHealthThreshold"></a>

- *Type:* typing.Union[int, float]

Optional.

The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#failover_health_threshold GoogleNetworkServicesServiceLbPolicies#failover_health_threshold}

---

##### `put_isolation_config` <a name="put_isolation_config" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putIsolationConfig"></a>

```python
def put_isolation_config(
  isolation_granularity: str = None,
  isolation_mode: str = None
) -> None
```

###### `isolation_granularity`<sup>Optional</sup> <a name="isolation_granularity" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putIsolationConfig.parameter.isolationGranularity"></a>

- *Type:* str

The isolation granularity of the load balancer. Possible values: ["ISOLATION_GRANULARITY_UNSPECIFIED", "REGION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#isolation_granularity GoogleNetworkServicesServiceLbPolicies#isolation_granularity}

---

###### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putIsolationConfig.parameter.isolationMode"></a>

- *Type:* str

The isolation mode of the load balancer. Default value: "NEAREST" Possible values: ["ISOLATION_MODE_UNSPECIFIED", "NEAREST", "STRICT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#isolation_mode GoogleNetworkServicesServiceLbPolicies#isolation_mode}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#create GoogleNetworkServicesServiceLbPolicies#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#delete GoogleNetworkServicesServiceLbPolicies#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#update GoogleNetworkServicesServiceLbPolicies#update}.

---

##### `reset_auto_capacity_drain` <a name="reset_auto_capacity_drain" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetAutoCapacityDrain"></a>

```python
def reset_auto_capacity_drain() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_failover_config` <a name="reset_failover_config" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetFailoverConfig"></a>

```python
def reset_failover_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_isolation_config` <a name="reset_isolation_config" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetIsolationConfig"></a>

```python
def reset_isolation_config() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_load_balancing_algorithm` <a name="reset_load_balancing_algorithm" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm"></a>

```python
def reset_load_balancing_algorithm() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesServiceLbPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkServicesServiceLbPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesServiceLbPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesServiceLbPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesServiceLbPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.autoCapacityDrain">auto_capacity_drain</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.failoverConfig">failover_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference">GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.isolationConfig">isolation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference">GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference">GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.autoCapacityDrainInput">auto_capacity_drain_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.failoverConfigInput">failover_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.isolationConfigInput">isolation_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig">GoogleNetworkServicesServiceLbPoliciesIsolationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput">load_balancing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm">load_balancing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_capacity_drain`<sup>Required</sup> <a name="auto_capacity_drain" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.autoCapacityDrain"></a>

```python
auto_capacity_drain: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `failover_config`<sup>Required</sup> <a name="failover_config" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.failoverConfig"></a>

```python
failover_config: GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference">GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a>

---

##### `isolation_config`<sup>Required</sup> <a name="isolation_config" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.isolationConfig"></a>

```python
isolation_config: GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference">GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference">GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `auto_capacity_drain_input`<sup>Optional</sup> <a name="auto_capacity_drain_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.autoCapacityDrainInput"></a>

```python
auto_capacity_drain_input: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `failover_config_input`<sup>Optional</sup> <a name="failover_config_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.failoverConfigInput"></a>

```python
failover_config_input: GoogleNetworkServicesServiceLbPoliciesFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `isolation_config_input`<sup>Optional</sup> <a name="isolation_config_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.isolationConfigInput"></a>

```python
isolation_config_input: GoogleNetworkServicesServiceLbPoliciesIsolationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig">GoogleNetworkServicesServiceLbPoliciesIsolationConfig</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_algorithm_input`<sup>Optional</sup> <a name="load_balancing_algorithm_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput"></a>

```python
load_balancing_algorithm_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkServicesServiceLbPoliciesTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_algorithm`<sup>Required</sup> <a name="load_balancing_algorithm" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm"></a>

```python
load_balancing_algorithm: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain <a name="GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain(
  enable: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | Optional. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Optional.

If set to 'True', an unhealthy MIG/NEG will be set as drained. - An MIG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the MIG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#enable GoogleNetworkServicesServiceLbPolicies#enable}

---

### GoogleNetworkServicesServiceLbPoliciesConfig <a name="GoogleNetworkServicesServiceLbPoliciesConfig" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  auto_capacity_drain: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain = None,
  deletion_policy: str = None,
  description: str = None,
  failover_config: GoogleNetworkServicesServiceLbPoliciesFailoverConfig = None,
  id: str = None,
  isolation_config: GoogleNetworkServicesServiceLbPoliciesIsolationConfig = None,
  labels: typing.Mapping[str] = None,
  load_balancing_algorithm: str = None,
  project: str = None,
  timeouts: GoogleNetworkServicesServiceLbPoliciesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.location">location</a></code> | <code>str</code> | The location of the service lb policy. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.name">name</a></code> | <code>str</code> | Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain">auto_capacity_drain</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | auto_capacity_drain block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.failoverConfig">failover_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a></code> | failover_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#id GoogleNetworkServicesServiceLbPolicies#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.isolationConfig">isolation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig">GoogleNetworkServicesServiceLbPoliciesIsolationConfig</a></code> | isolation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the ServiceLbPolicy resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm">load_balancing_algorithm</a></code> | <code>str</code> | The type of load balancing algorithm to be used. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#project GoogleNetworkServicesServiceLbPolicies#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the service lb policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#location GoogleNetworkServicesServiceLbPolicies#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#name GoogleNetworkServicesServiceLbPolicies#name}

---

##### `auto_capacity_drain`<sup>Optional</sup> <a name="auto_capacity_drain" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain"></a>

```python
auto_capacity_drain: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

auto_capacity_drain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#auto_capacity_drain GoogleNetworkServicesServiceLbPolicies#auto_capacity_drain}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#deletion_policy GoogleNetworkServicesServiceLbPolicies#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#description GoogleNetworkServicesServiceLbPolicies#description}

---

##### `failover_config`<sup>Optional</sup> <a name="failover_config" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.failoverConfig"></a>

```python
failover_config: GoogleNetworkServicesServiceLbPoliciesFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#failover_config GoogleNetworkServicesServiceLbPolicies#failover_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#id GoogleNetworkServicesServiceLbPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolation_config`<sup>Optional</sup> <a name="isolation_config" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.isolationConfig"></a>

```python
isolation_config: GoogleNetworkServicesServiceLbPoliciesIsolationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig">GoogleNetworkServicesServiceLbPoliciesIsolationConfig</a>

isolation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#isolation_config GoogleNetworkServicesServiceLbPolicies#isolation_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the ServiceLbPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#labels GoogleNetworkServicesServiceLbPolicies#labels}

---

##### `load_balancing_algorithm`<sup>Optional</sup> <a name="load_balancing_algorithm" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm"></a>

```python
load_balancing_algorithm: str
```

- *Type:* str

The type of load balancing algorithm to be used.

The default behavior is WATERFALL_BY_REGION. Possible values: ["SPRAY_TO_REGION", "SPRAY_TO_WORLD", "WATERFALL_BY_REGION", "WATERFALL_BY_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#load_balancing_algorithm GoogleNetworkServicesServiceLbPolicies#load_balancing_algorithm}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#project GoogleNetworkServicesServiceLbPolicies#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesServiceLbPoliciesTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#timeouts GoogleNetworkServicesServiceLbPolicies#timeouts}

---

### GoogleNetworkServicesServiceLbPoliciesFailoverConfig <a name="GoogleNetworkServicesServiceLbPoliciesFailoverConfig" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig(
  failover_health_threshold: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold">failover_health_threshold</a></code> | <code>typing.Union[int, float]</code> | Optional. |

---

##### `failover_health_threshold`<sup>Required</sup> <a name="failover_health_threshold" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold"></a>

```python
failover_health_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#failover_health_threshold GoogleNetworkServicesServiceLbPolicies#failover_health_threshold}

---

### GoogleNetworkServicesServiceLbPoliciesIsolationConfig <a name="GoogleNetworkServicesServiceLbPoliciesIsolationConfig" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig(
  isolation_granularity: str = None,
  isolation_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig.property.isolationGranularity">isolation_granularity</a></code> | <code>str</code> | The isolation granularity of the load balancer. Possible values: ["ISOLATION_GRANULARITY_UNSPECIFIED", "REGION"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig.property.isolationMode">isolation_mode</a></code> | <code>str</code> | The isolation mode of the load balancer. Default value: "NEAREST" Possible values: ["ISOLATION_MODE_UNSPECIFIED", "NEAREST", "STRICT"]. |

---

##### `isolation_granularity`<sup>Optional</sup> <a name="isolation_granularity" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig.property.isolationGranularity"></a>

```python
isolation_granularity: str
```

- *Type:* str

The isolation granularity of the load balancer. Possible values: ["ISOLATION_GRANULARITY_UNSPECIFIED", "REGION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#isolation_granularity GoogleNetworkServicesServiceLbPolicies#isolation_granularity}

---

##### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

The isolation mode of the load balancer. Default value: "NEAREST" Possible values: ["ISOLATION_MODE_UNSPECIFIED", "NEAREST", "STRICT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#isolation_mode GoogleNetworkServicesServiceLbPolicies#isolation_mode}

---

### GoogleNetworkServicesServiceLbPoliciesTimeouts <a name="GoogleNetworkServicesServiceLbPoliciesTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#create GoogleNetworkServicesServiceLbPolicies#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#delete GoogleNetworkServicesServiceLbPolicies#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#update GoogleNetworkServicesServiceLbPolicies#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#create GoogleNetworkServicesServiceLbPolicies#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#delete GoogleNetworkServicesServiceLbPolicies#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_service_lb_policies#update GoogleNetworkServicesServiceLbPolicies#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference <a name="GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable">reset_enable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable` <a name="reset_enable" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput">enable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput"></a>

```python
enable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---


### GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference <a name="GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput">failover_health_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold">failover_health_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failover_health_threshold_input`<sup>Optional</sup> <a name="failover_health_threshold_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput"></a>

```python
failover_health_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failover_health_threshold`<sup>Required</sup> <a name="failover_health_threshold" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold"></a>

```python
failover_health_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesServiceLbPoliciesFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a>

---


### GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference <a name="GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.resetIsolationGranularity">reset_isolation_granularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.resetIsolationMode">reset_isolation_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_isolation_granularity` <a name="reset_isolation_granularity" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.resetIsolationGranularity"></a>

```python
def reset_isolation_granularity() -> None
```

##### `reset_isolation_mode` <a name="reset_isolation_mode" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.resetIsolationMode"></a>

```python
def reset_isolation_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.isolationGranularityInput">isolation_granularity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.isolationModeInput">isolation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.isolationGranularity">isolation_granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.isolationMode">isolation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig">GoogleNetworkServicesServiceLbPoliciesIsolationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `isolation_granularity_input`<sup>Optional</sup> <a name="isolation_granularity_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.isolationGranularityInput"></a>

```python
isolation_granularity_input: str
```

- *Type:* str

---

##### `isolation_mode_input`<sup>Optional</sup> <a name="isolation_mode_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.isolationModeInput"></a>

```python
isolation_mode_input: str
```

- *Type:* str

---

##### `isolation_granularity`<sup>Required</sup> <a name="isolation_granularity" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.isolationGranularity"></a>

```python
isolation_granularity: str
```

- *Type:* str

---

##### `isolation_mode`<sup>Required</sup> <a name="isolation_mode" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesServiceLbPoliciesIsolationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesIsolationConfig">GoogleNetworkServicesServiceLbPoliciesIsolationConfig</a>

---


### GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference <a name="GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_service_lb_policies

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkServicesServiceLbPoliciesTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a>

---



