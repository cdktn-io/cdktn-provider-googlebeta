# `googleNetworkServicesAgentGateway` Submodule <a name="`googleNetworkServicesAgentGateway` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesAgentGateway <a name="GoogleNetworkServicesAgentGateway" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway google_network_services_agent_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway(
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
  protocols: typing.List[str],
  deletion_policy: str = None,
  description: str = None,
  google_managed: GoogleNetworkServicesAgentGatewayGoogleManaged = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network_config: GoogleNetworkServicesAgentGatewayNetworkConfig = None,
  project: str = None,
  registries: typing.List[str] = None,
  self_managed: GoogleNetworkServicesAgentGatewaySelfManaged = None,
  timeouts: GoogleNetworkServicesAgentGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the agent gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.protocols">protocols</a></code> | <code>typing.List[str]</code> | List of protocols supported by an Agent Gateway. Possible values: ["MCP"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.googleManaged">google_managed</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | google_managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#id GoogleNetworkServicesAgentGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#project GoogleNetworkServicesAgentGateway#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.registries">registries</a></code> | <code>typing.List[str]</code> | A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.selfManaged">self_managed</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.location"></a>

- *Type:* str

The location of the agent gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#location GoogleNetworkServicesAgentGateway#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.name"></a>

- *Type:* str

Name of the AgentGateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#name GoogleNetworkServicesAgentGateway#name}

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.protocols"></a>

- *Type:* typing.List[str]

List of protocols supported by an Agent Gateway. Possible values: ["MCP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#protocols GoogleNetworkServicesAgentGateway#protocols}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#deletion_policy GoogleNetworkServicesAgentGateway#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#description GoogleNetworkServicesAgentGateway#description}

---

##### `google_managed`<sup>Optional</sup> <a name="google_managed" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.googleManaged"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

google_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#google_managed GoogleNetworkServicesAgentGateway#google_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#id GoogleNetworkServicesAgentGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the AgentGateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#labels GoogleNetworkServicesAgentGateway#labels}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#network_config GoogleNetworkServicesAgentGateway#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#project GoogleNetworkServicesAgentGateway#project}.

---

##### `registries`<sup>Optional</sup> <a name="registries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.registries"></a>

- *Type:* typing.List[str]

A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway.

Note: Currently limited to project-scoped registries Must be of format
'//agentregistry.googleapis.com/{version}/projects/{{project}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#registries GoogleNetworkServicesAgentGateway#registries}

---

##### `self_managed`<sup>Optional</sup> <a name="self_managed" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.selfManaged"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#self_managed GoogleNetworkServicesAgentGateway#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#timeouts GoogleNetworkServicesAgentGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putGoogleManaged">put_google_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putSelfManaged">put_self_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetGoogleManaged">reset_google_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetRegistries">reset_registries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetSelfManaged">reset_self_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_google_managed` <a name="put_google_managed" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putGoogleManaged"></a>

```python
def put_google_managed(
  governed_access_path: str
) -> None
```

###### `governed_access_path`<sup>Required</sup> <a name="governed_access_path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putGoogleManaged.parameter.governedAccessPath"></a>

- *Type:* str

Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#governed_access_path GoogleNetworkServicesAgentGateway#governed_access_path}

---

##### `put_network_config` <a name="put_network_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putNetworkConfig"></a>

```python
def put_network_config(
  egress: GoogleNetworkServicesAgentGatewayNetworkConfigEgress
) -> None
```

###### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putNetworkConfig.parameter.egress"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#egress GoogleNetworkServicesAgentGateway#egress}

---

##### `put_self_managed` <a name="put_self_managed" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putSelfManaged"></a>

```python
def put_self_managed(
  resource_uri: str
) -> None
```

###### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putSelfManaged.parameter.resourceUri"></a>

- *Type:* str

A supported Google Cloud networking proxy in the Project and Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#resource_uri GoogleNetworkServicesAgentGateway#resource_uri}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#create GoogleNetworkServicesAgentGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#delete GoogleNetworkServicesAgentGateway#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#update GoogleNetworkServicesAgentGateway#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_google_managed` <a name="reset_google_managed" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetGoogleManaged"></a>

```python
def reset_google_managed() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_registries` <a name="reset_registries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetRegistries"></a>

```python
def reset_registries() -> None
```

##### `reset_self_managed` <a name="reset_self_managed" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetSelfManaged"></a>

```python
def reset_self_managed() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesAgentGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkServicesAgentGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesAgentGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesAgentGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesAgentGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.agentGatewayCard">agent_gateway_card</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList">GoogleNetworkServicesAgentGatewayAgentGatewayCardList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManaged">google_managed</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference">GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManaged">self_managed</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference">GoogleNetworkServicesAgentGatewaySelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference">GoogleNetworkServicesAgentGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManagedInput">google_managed_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registriesInput">registries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManagedInput">self_managed_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registries">registries</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_gateway_card`<sup>Required</sup> <a name="agent_gateway_card" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.agentGatewayCard"></a>

```python
agent_gateway_card: GoogleNetworkServicesAgentGatewayAgentGatewayCardList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList">GoogleNetworkServicesAgentGatewayAgentGatewayCardList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `google_managed`<sup>Required</sup> <a name="google_managed" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManaged"></a>

```python
google_managed: GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference">GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfig"></a>

```python
network_config: GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference</a>

---

##### `self_managed`<sup>Required</sup> <a name="self_managed" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManaged"></a>

```python
self_managed: GoogleNetworkServicesAgentGatewaySelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference">GoogleNetworkServicesAgentGatewaySelfManagedOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesAgentGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference">GoogleNetworkServicesAgentGatewayTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `google_managed_input`<sup>Optional</sup> <a name="google_managed_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.googleManagedInput"></a>

```python
google_managed_input: GoogleNetworkServicesAgentGatewayGoogleManaged
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.networkConfigInput"></a>

```python
network_config_input: GoogleNetworkServicesAgentGatewayNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registries_input`<sup>Optional</sup> <a name="registries_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registriesInput"></a>

```python
registries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_managed_input`<sup>Optional</sup> <a name="self_managed_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.selfManagedInput"></a>

```python
self_managed_input: GoogleNetworkServicesAgentGatewaySelfManaged
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkServicesAgentGatewayTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registries`<sup>Required</sup> <a name="registries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.registries"></a>

```python
registries: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesAgentGatewayAgentGatewayCard <a name="GoogleNetworkServicesAgentGatewayAgentGatewayCard" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard()
```


### GoogleNetworkServicesAgentGatewayConfig <a name="GoogleNetworkServicesAgentGatewayConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  protocols: typing.List[str],
  deletion_policy: str = None,
  description: str = None,
  google_managed: GoogleNetworkServicesAgentGatewayGoogleManaged = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network_config: GoogleNetworkServicesAgentGatewayNetworkConfig = None,
  project: str = None,
  registries: typing.List[str] = None,
  self_managed: GoogleNetworkServicesAgentGatewaySelfManaged = None,
  timeouts: GoogleNetworkServicesAgentGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.location">location</a></code> | <code>str</code> | The location of the agent gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.name">name</a></code> | <code>str</code> | Name of the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | List of protocols supported by an Agent Gateway. Possible values: ["MCP"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.googleManaged">google_managed</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | google_managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#id GoogleNetworkServicesAgentGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#project GoogleNetworkServicesAgentGateway#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.registries">registries</a></code> | <code>typing.List[str]</code> | A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.selfManaged">self_managed</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the agent gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#location GoogleNetworkServicesAgentGateway#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the AgentGateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#name GoogleNetworkServicesAgentGateway#name}

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

List of protocols supported by an Agent Gateway. Possible values: ["MCP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#protocols GoogleNetworkServicesAgentGateway#protocols}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#deletion_policy GoogleNetworkServicesAgentGateway#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#description GoogleNetworkServicesAgentGateway#description}

---

##### `google_managed`<sup>Optional</sup> <a name="google_managed" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.googleManaged"></a>

```python
google_managed: GoogleNetworkServicesAgentGatewayGoogleManaged
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

google_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#google_managed GoogleNetworkServicesAgentGateway#google_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#id GoogleNetworkServicesAgentGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the AgentGateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#labels GoogleNetworkServicesAgentGateway#labels}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.networkConfig"></a>

```python
network_config: GoogleNetworkServicesAgentGatewayNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#network_config GoogleNetworkServicesAgentGateway#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#project GoogleNetworkServicesAgentGateway#project}.

---

##### `registries`<sup>Optional</sup> <a name="registries" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.registries"></a>

```python
registries: typing.List[str]
```

- *Type:* typing.List[str]

A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway.

Note: Currently limited to project-scoped registries Must be of format
'//agentregistry.googleapis.com/{version}/projects/{{project}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#registries GoogleNetworkServicesAgentGateway#registries}

---

##### `self_managed`<sup>Optional</sup> <a name="self_managed" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.selfManaged"></a>

```python
self_managed: GoogleNetworkServicesAgentGatewaySelfManaged
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#self_managed GoogleNetworkServicesAgentGateway#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesAgentGatewayTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#timeouts GoogleNetworkServicesAgentGateway#timeouts}

---

### GoogleNetworkServicesAgentGatewayGoogleManaged <a name="GoogleNetworkServicesAgentGatewayGoogleManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged(
  governed_access_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged.property.governedAccessPath">governed_access_path</a></code> | <code>str</code> | Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"]. |

---

##### `governed_access_path`<sup>Required</sup> <a name="governed_access_path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged.property.governedAccessPath"></a>

```python
governed_access_path: str
```

- *Type:* str

Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#governed_access_path GoogleNetworkServicesAgentGateway#governed_access_path}

---

### GoogleNetworkServicesAgentGatewayNetworkConfig <a name="GoogleNetworkServicesAgentGatewayNetworkConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig(
  egress: GoogleNetworkServicesAgentGatewayNetworkConfigEgress
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig.property.egress">egress</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a></code> | egress block. |

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig.property.egress"></a>

```python
egress: GoogleNetworkServicesAgentGatewayNetworkConfigEgress
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#egress GoogleNetworkServicesAgentGateway#egress}

---

### GoogleNetworkServicesAgentGatewayNetworkConfigEgress <a name="GoogleNetworkServicesAgentGatewayNetworkConfigEgress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress(
  network_attachment: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress.property.networkAttachment">network_attachment</a></code> | <code>str</code> | The URI of the Network Attachment resource. |

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

The URI of the Network Attachment resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#network_attachment GoogleNetworkServicesAgentGateway#network_attachment}

---

### GoogleNetworkServicesAgentGatewaySelfManaged <a name="GoogleNetworkServicesAgentGatewaySelfManaged" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged(
  resource_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged.property.resourceUri">resource_uri</a></code> | <code>str</code> | A supported Google Cloud networking proxy in the Project and Location. |

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

A supported Google Cloud networking proxy in the Project and Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#resource_uri GoogleNetworkServicesAgentGateway#resource_uri}

---

### GoogleNetworkServicesAgentGatewayTimeouts <a name="GoogleNetworkServicesAgentGatewayTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#create GoogleNetworkServicesAgentGateway#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#delete GoogleNetworkServicesAgentGateway#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#update GoogleNetworkServicesAgentGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#create GoogleNetworkServicesAgentGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#delete GoogleNetworkServicesAgentGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#update GoogleNetworkServicesAgentGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesAgentGatewayAgentGatewayCardList <a name="GoogleNetworkServicesAgentGatewayAgentGatewayCardList" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference <a name="GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.mtlsEndpoint">mtls_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.rootCertificates">root_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.serviceExtensionsServiceAccount">service_extensions_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard">GoogleNetworkServicesAgentGatewayAgentGatewayCard</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mtls_endpoint`<sup>Required</sup> <a name="mtls_endpoint" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.mtlsEndpoint"></a>

```python
mtls_endpoint: str
```

- *Type:* str

---

##### `root_certificates`<sup>Required</sup> <a name="root_certificates" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.rootCertificates"></a>

```python
root_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_extensions_service_account`<sup>Required</sup> <a name="service_extensions_service_account" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.serviceExtensionsServiceAccount"></a>

```python
service_extensions_service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesAgentGatewayAgentGatewayCard
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayAgentGatewayCard">GoogleNetworkServicesAgentGatewayAgentGatewayCard</a>

---


### GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference <a name="GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPathInput">governed_access_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPath">governed_access_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `governed_access_path_input`<sup>Optional</sup> <a name="governed_access_path_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPathInput"></a>

```python
governed_access_path_input: str
```

- *Type:* str

---

##### `governed_access_path`<sup>Required</sup> <a name="governed_access_path" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPath"></a>

```python
governed_access_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManagedOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesAgentGatewayGoogleManaged
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayGoogleManaged">GoogleNetworkServicesAgentGatewayGoogleManaged</a>

---


### GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference <a name="GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesAgentGatewayNetworkConfigEgress
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

---


### GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference <a name="GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress">put_egress</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_egress` <a name="put_egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress"></a>

```python
def put_egress(
  network_attachment: str
) -> None
```

###### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress.parameter.networkAttachment"></a>

- *Type:* str

The URI of the Network Attachment resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_agent_gateway#network_attachment GoogleNetworkServicesAgentGateway#network_attachment}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egress">egress</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egressInput">egress_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egress"></a>

```python
egress: GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference">GoogleNetworkServicesAgentGatewayNetworkConfigEgressOutputReference</a>

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.egressInput"></a>

```python
egress_input: GoogleNetworkServicesAgentGatewayNetworkConfigEgress
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigEgress">GoogleNetworkServicesAgentGatewayNetworkConfigEgress</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesAgentGatewayNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayNetworkConfig">GoogleNetworkServicesAgentGatewayNetworkConfig</a>

---


### GoogleNetworkServicesAgentGatewaySelfManagedOutputReference <a name="GoogleNetworkServicesAgentGatewaySelfManagedOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUriInput">resource_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUri">resource_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_uri_input`<sup>Optional</sup> <a name="resource_uri_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUriInput"></a>

```python
resource_uri_input: str
```

- *Type:* str

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManagedOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesAgentGatewaySelfManaged
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewaySelfManaged">GoogleNetworkServicesAgentGatewaySelfManaged</a>

---


### GoogleNetworkServicesAgentGatewayTimeoutsOutputReference <a name="GoogleNetworkServicesAgentGatewayTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_agent_gateway

googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkServicesAgentGatewayTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesAgentGateway.GoogleNetworkServicesAgentGatewayTimeouts">GoogleNetworkServicesAgentGatewayTimeouts</a>

---



