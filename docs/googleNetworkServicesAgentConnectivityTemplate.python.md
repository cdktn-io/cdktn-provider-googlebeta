# `googleNetworkServicesAgentConnectivityTemplate` Submodule <a name="`googleNetworkServicesAgentConnectivityTemplate` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesAgentConnectivityTemplate <a name="GoogleNetworkServicesAgentConnectivityTemplate" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template google_network_services_agent_connectivity_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_path: str,
  agent_connectivity_template_id: str,
  location: str,
  access_types: typing.List[str] = None,
  deletion_policy: str = None,
  description: str = None,
  egress_network_config: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesAgentConnectivityTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessPath">access_path</a></code> | <code>str</code> | The path of the access. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.agentConnectivityTemplateId">agent_connectivity_template_id</a></code> | <code>str</code> | Short name of the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the AgentConnectivityTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessTypes">access_types</a></code> | <code>typing.List[str]</code> | The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.egressNetworkConfig">egress_network_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | egress_network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#id GoogleNetworkServicesAgentConnectivityTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#project GoogleNetworkServicesAgentConnectivityTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_path`<sup>Required</sup> <a name="access_path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessPath"></a>

- *Type:* str

The path of the access.

The path is immutable once set. Exactly one path can be set. Possible values: ["CLIENT_TO_AGENT", "AGENT_TO_ANYWHERE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#access_path GoogleNetworkServicesAgentConnectivityTemplate#access_path}

---

##### `agent_connectivity_template_id`<sup>Required</sup> <a name="agent_connectivity_template_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.agentConnectivityTemplateId"></a>

- *Type:* str

Short name of the AgentConnectivityTemplate resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#agent_connectivity_template_id GoogleNetworkServicesAgentConnectivityTemplate#agent_connectivity_template_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.location"></a>

- *Type:* str

The location of the AgentConnectivityTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#location GoogleNetworkServicesAgentConnectivityTemplate#location}

---

##### `access_types`<sup>Optional</sup> <a name="access_types" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessTypes"></a>

- *Type:* typing.List[str]

The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#access_types GoogleNetworkServicesAgentConnectivityTemplate#access_types}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#deletion_policy GoogleNetworkServicesAgentConnectivityTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#description GoogleNetworkServicesAgentConnectivityTemplate#description}

---

##### `egress_network_config`<sup>Optional</sup> <a name="egress_network_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.egressNetworkConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

egress_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#egress_network_config GoogleNetworkServicesAgentConnectivityTemplate#egress_network_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#id GoogleNetworkServicesAgentConnectivityTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the AgentConnectivityTemplate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#labels GoogleNetworkServicesAgentConnectivityTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#project GoogleNetworkServicesAgentConnectivityTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#timeouts GoogleNetworkServicesAgentConnectivityTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig">put_egress_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetAccessTypes">reset_access_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig">reset_egress_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_egress_network_config` <a name="put_egress_network_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig"></a>

```python
def put_egress_network_config(
  dns_peering_config: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig = None,
  network_attachment: str = None,
  tls_config: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig = None,
  vpc_egress: str = None
) -> None
```

###### `dns_peering_config`<sup>Optional</sup> <a name="dns_peering_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.dnsPeeringConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

dns_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#dns_peering_config GoogleNetworkServicesAgentConnectivityTemplate#dns_peering_config}

---

###### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.networkAttachment"></a>

- *Type:* str

The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#network_attachment GoogleNetworkServicesAgentConnectivityTemplate#network_attachment}

---

###### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#tls_config GoogleNetworkServicesAgentConnectivityTemplate#tls_config}

---

###### `vpc_egress`<sup>Optional</sup> <a name="vpc_egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.vpcEgress"></a>

- *Type:* str

The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#vpc_egress GoogleNetworkServicesAgentConnectivityTemplate#vpc_egress}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#create GoogleNetworkServicesAgentConnectivityTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#delete GoogleNetworkServicesAgentConnectivityTemplate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#update GoogleNetworkServicesAgentConnectivityTemplate#update}.

---

##### `reset_access_types` <a name="reset_access_types" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetAccessTypes"></a>

```python
def reset_access_types() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_egress_network_config` <a name="reset_egress_network_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig"></a>

```python
def reset_egress_network_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesAgentConnectivityTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesAgentConnectivityTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesAgentConnectivityTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig">egress_network_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPathInput">access_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypesInput">access_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput">agent_connectivity_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput">egress_network_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPath">access_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypes">access_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId">agent_connectivity_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `egress_network_config`<sup>Required</sup> <a name="egress_network_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig"></a>

```python
egress_network_config: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `access_path_input`<sup>Optional</sup> <a name="access_path_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPathInput"></a>

```python
access_path_input: str
```

- *Type:* str

---

##### `access_types_input`<sup>Optional</sup> <a name="access_types_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypesInput"></a>

```python
access_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `agent_connectivity_template_id_input`<sup>Optional</sup> <a name="agent_connectivity_template_id_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput"></a>

```python
agent_connectivity_template_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `egress_network_config_input`<sup>Optional</sup> <a name="egress_network_config_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput"></a>

```python
egress_network_config_input: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkServicesAgentConnectivityTemplateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

---

##### `access_path`<sup>Required</sup> <a name="access_path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessPath"></a>

```python
access_path: str
```

- *Type:* str

---

##### `access_types`<sup>Required</sup> <a name="access_types" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.accessTypes"></a>

```python
access_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `agent_connectivity_template_id`<sup>Required</sup> <a name="agent_connectivity_template_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId"></a>

```python
agent_connectivity_template_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesAgentConnectivityTemplateConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_path: str,
  agent_connectivity_template_id: str,
  location: str,
  access_types: typing.List[str] = None,
  deletion_policy: str = None,
  description: str = None,
  egress_network_config: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesAgentConnectivityTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessPath">access_path</a></code> | <code>str</code> | The path of the access. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId">agent_connectivity_template_id</a></code> | <code>str</code> | Short name of the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.location">location</a></code> | <code>str</code> | The location of the AgentConnectivityTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessTypes">access_types</a></code> | <code>typing.List[str]</code> | The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig">egress_network_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | egress_network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#id GoogleNetworkServicesAgentConnectivityTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#project GoogleNetworkServicesAgentConnectivityTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_path`<sup>Required</sup> <a name="access_path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessPath"></a>

```python
access_path: str
```

- *Type:* str

The path of the access.

The path is immutable once set. Exactly one path can be set. Possible values: ["CLIENT_TO_AGENT", "AGENT_TO_ANYWHERE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#access_path GoogleNetworkServicesAgentConnectivityTemplate#access_path}

---

##### `agent_connectivity_template_id`<sup>Required</sup> <a name="agent_connectivity_template_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId"></a>

```python
agent_connectivity_template_id: str
```

- *Type:* str

Short name of the AgentConnectivityTemplate resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#agent_connectivity_template_id GoogleNetworkServicesAgentConnectivityTemplate#agent_connectivity_template_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the AgentConnectivityTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#location GoogleNetworkServicesAgentConnectivityTemplate#location}

---

##### `access_types`<sup>Optional</sup> <a name="access_types" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.accessTypes"></a>

```python
access_types: typing.List[str]
```

- *Type:* typing.List[str]

The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#access_types GoogleNetworkServicesAgentConnectivityTemplate#access_types}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#deletion_policy GoogleNetworkServicesAgentConnectivityTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#description GoogleNetworkServicesAgentConnectivityTemplate#description}

---

##### `egress_network_config`<sup>Optional</sup> <a name="egress_network_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig"></a>

```python
egress_network_config: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

egress_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#egress_network_config GoogleNetworkServicesAgentConnectivityTemplate#egress_network_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#id GoogleNetworkServicesAgentConnectivityTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the AgentConnectivityTemplate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#labels GoogleNetworkServicesAgentConnectivityTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#project GoogleNetworkServicesAgentConnectivityTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesAgentConnectivityTemplateTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#timeouts GoogleNetworkServicesAgentConnectivityTemplate#timeouts}

---

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig(
  dns_peering_config: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig = None,
  network_attachment: str = None,
  tls_config: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig = None,
  vpc_egress: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig">dns_peering_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | dns_peering_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment">network_attachment</a></code> | <code>str</code> | The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress">vpc_egress</a></code> | <code>str</code> | The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |

---

##### `dns_peering_config`<sup>Optional</sup> <a name="dns_peering_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig"></a>

```python
dns_peering_config: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

dns_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#dns_peering_config GoogleNetworkServicesAgentConnectivityTemplate#dns_peering_config}

---

##### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#network_attachment GoogleNetworkServicesAgentConnectivityTemplate#network_attachment}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig"></a>

```python
tls_config: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#tls_config GoogleNetworkServicesAgentConnectivityTemplate#tls_config}

---

##### `vpc_egress`<sup>Optional</sup> <a name="vpc_egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress"></a>

```python
vpc_egress: str
```

- *Type:* str

The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#vpc_egress GoogleNetworkServicesAgentConnectivityTemplate#vpc_egress}

---

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig(
  target_network: str,
  domain: str = None,
  domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork">target_network</a></code> | <code>str</code> | The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain">domain</a></code> | <code>str</code> | The domain name to peer for DNS resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains">domains</a></code> | <code>typing.List[str]</code> | The list of domain names to peer for DNS resolution. |

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#target_network GoogleNetworkServicesAgentConnectivityTemplate#target_network}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

The domain name to peer for DNS resolution.

Must be a fully
qualified domain name ending with a dot (for example, 'example.com.').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#domain GoogleNetworkServicesAgentConnectivityTemplate#domain}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

The list of domain names to peer for DNS resolution.

Each entry
must be a fully qualified domain name ending with a dot
(for example, 'example.com.'). At least one domain must be
specified between 'domain' and 'domains'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#domains GoogleNetworkServicesAgentConnectivityTemplate#domains}

---

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig(
  additional_roots: str,
  trust_config: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots">additional_roots</a></code> | <code>str</code> | Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig">trust_config</a></code> | <code>str</code> | The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}. |

---

##### `additional_roots`<sup>Required</sup> <a name="additional_roots" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots"></a>

```python
additional_roots: str
```

- *Type:* str

Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#additional_roots GoogleNetworkServicesAgentConnectivityTemplate#additional_roots}

---

##### `trust_config`<sup>Optional</sup> <a name="trust_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig"></a>

```python
trust_config: str
```

- *Type:* str

The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#trust_config GoogleNetworkServicesAgentConnectivityTemplate#trust_config}

---

### GoogleNetworkServicesAgentConnectivityTemplateTimeouts <a name="GoogleNetworkServicesAgentConnectivityTemplateTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#create GoogleNetworkServicesAgentConnectivityTemplate#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#delete GoogleNetworkServicesAgentConnectivityTemplate#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#update GoogleNetworkServicesAgentConnectivityTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#create GoogleNetworkServicesAgentConnectivityTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#delete GoogleNetworkServicesAgentConnectivityTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#update GoogleNetworkServicesAgentConnectivityTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains">reset_domains</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_domains` <a name="reset_domains" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains"></a>

```python
def reset_domains() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput">domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput">target_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork">target_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput"></a>

```python
domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_network_input`<sup>Optional</sup> <a name="target_network_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput"></a>

```python
target_network_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---


### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig">put_dns_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig">reset_dns_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment">reset_network_attachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig">reset_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress">reset_vpc_egress</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_peering_config` <a name="put_dns_peering_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig"></a>

```python
def put_dns_peering_config(
  target_network: str,
  domain: str = None,
  domains: typing.List[str] = None
) -> None
```

###### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig.parameter.targetNetwork"></a>

- *Type:* str

The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#target_network GoogleNetworkServicesAgentConnectivityTemplate#target_network}

---

###### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig.parameter.domain"></a>

- *Type:* str

The domain name to peer for DNS resolution.

Must be a fully
qualified domain name ending with a dot (for example, 'example.com.').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#domain GoogleNetworkServicesAgentConnectivityTemplate#domain}

---

###### `domains`<sup>Optional</sup> <a name="domains" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig.parameter.domains"></a>

- *Type:* typing.List[str]

The list of domain names to peer for DNS resolution.

Each entry
must be a fully qualified domain name ending with a dot
(for example, 'example.com.'). At least one domain must be
specified between 'domain' and 'domains'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#domains GoogleNetworkServicesAgentConnectivityTemplate#domains}

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig"></a>

```python
def put_tls_config(
  additional_roots: str,
  trust_config: str = None
) -> None
```

###### `additional_roots`<sup>Required</sup> <a name="additional_roots" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig.parameter.additionalRoots"></a>

- *Type:* str

Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#additional_roots GoogleNetworkServicesAgentConnectivityTemplate#additional_roots}

---

###### `trust_config`<sup>Optional</sup> <a name="trust_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig.parameter.trustConfig"></a>

- *Type:* str

The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_services_agent_connectivity_template#trust_config GoogleNetworkServicesAgentConnectivityTemplate#trust_config}

---

##### `reset_dns_peering_config` <a name="reset_dns_peering_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig"></a>

```python
def reset_dns_peering_config() -> None
```

##### `reset_network_attachment` <a name="reset_network_attachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment"></a>

```python
def reset_network_attachment() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```

##### `reset_vpc_egress` <a name="reset_vpc_egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress"></a>

```python
def reset_vpc_egress() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig">dns_peering_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput">dns_peering_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput">vpc_egress_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress">vpc_egress</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_peering_config`<sup>Required</sup> <a name="dns_peering_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig"></a>

```python
dns_peering_config: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig"></a>

```python
tls_config: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a>

---

##### `dns_peering_config_input`<sup>Optional</sup> <a name="dns_peering_config_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput"></a>

```python
dns_peering_config_input: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput"></a>

```python
tls_config_input: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `vpc_egress_input`<sup>Optional</sup> <a name="vpc_egress_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput"></a>

```python
vpc_egress_input: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `vpc_egress`<sup>Required</sup> <a name="vpc_egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress"></a>

```python
vpc_egress: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---


### GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig">reset_trust_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_trust_config` <a name="reset_trust_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig"></a>

```python
def reset_trust_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput">additional_roots_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput">trust_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots">additional_roots</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig">trust_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_roots_input`<sup>Optional</sup> <a name="additional_roots_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput"></a>

```python
additional_roots_input: str
```

- *Type:* str

---

##### `trust_config_input`<sup>Optional</sup> <a name="trust_config_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput"></a>

```python
trust_config_input: str
```

- *Type:* str

---

##### `additional_roots`<sup>Required</sup> <a name="additional_roots" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots"></a>

```python
additional_roots: str
```

- *Type:* str

---

##### `trust_config`<sup>Required</sup> <a name="trust_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig"></a>

```python
trust_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">GoogleNetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---


### GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference <a name="GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_connectivity_template

googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkServicesAgentConnectivityTemplateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentConnectivityTemplate.GoogleNetworkServicesAgentConnectivityTemplateTimeouts">GoogleNetworkServicesAgentConnectivityTemplateTimeouts</a>

---



