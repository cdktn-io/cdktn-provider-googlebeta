# `googleAgentRegistryService` Submodule <a name="`googleAgentRegistryService` Submodule" id="@cdktn/provider-google-beta.googleAgentRegistryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAgentRegistryService <a name="GoogleAgentRegistryService" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service google_agent_registry_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryService(
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
  service_id: str,
  agent_spec: GoogleAgentRegistryServiceAgentSpec = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  endpoint_spec: GoogleAgentRegistryServiceEndpointSpec = None,
  id: str = None,
  interfaces: IResolvable | typing.List[GoogleAgentRegistryServiceInterfaces] = None,
  mcp_server_spec: GoogleAgentRegistryServiceMcpServerSpec = None,
  project: str = None,
  timeouts: GoogleAgentRegistryServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | The name of the Service. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.agentSpec">agent_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a></code> | agent_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the Service. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-defined display name for the Service. Can have a maximum length of 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.endpointSpec">endpoint_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#id GoogleAgentRegistryService#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.interfaces">interfaces</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces">GoogleAgentRegistryServiceInterfaces</a>]</code> | interfaces block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.mcpServerSpec">mcp_server_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a></code> | mcp_server_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#project GoogleAgentRegistryService#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts">GoogleAgentRegistryServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#location GoogleAgentRegistryService#location}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.serviceId"></a>

- *Type:* str

The name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#service_id GoogleAgentRegistryService#service_id}

---

##### `agent_spec`<sup>Optional</sup> <a name="agent_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.agentSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a>

agent_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#agent_spec GoogleAgentRegistryService#agent_spec}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#deletion_policy GoogleAgentRegistryService#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.description"></a>

- *Type:* str

The description of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#description GoogleAgentRegistryService#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.displayName"></a>

- *Type:* str

User-defined display name for the Service. Can have a maximum length of 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#display_name GoogleAgentRegistryService#display_name}

---

##### `endpoint_spec`<sup>Optional</sup> <a name="endpoint_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.endpointSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#endpoint_spec GoogleAgentRegistryService#endpoint_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#id GoogleAgentRegistryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interfaces`<sup>Optional</sup> <a name="interfaces" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.interfaces"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces">GoogleAgentRegistryServiceInterfaces</a>]

interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#interfaces GoogleAgentRegistryService#interfaces}

---

##### `mcp_server_spec`<sup>Optional</sup> <a name="mcp_server_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.mcpServerSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a>

mcp_server_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#mcp_server_spec GoogleAgentRegistryService#mcp_server_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#project GoogleAgentRegistryService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts">GoogleAgentRegistryServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#timeouts GoogleAgentRegistryService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putAgentSpec">put_agent_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putEndpointSpec">put_endpoint_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putInterfaces">put_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putMcpServerSpec">put_mcp_server_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetAgentSpec">reset_agent_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetEndpointSpec">reset_endpoint_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetInterfaces">reset_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetMcpServerSpec">reset_mcp_server_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_agent_spec` <a name="put_agent_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putAgentSpec"></a>

```python
def put_agent_spec(
  type: str,
  content: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putAgentSpec.parameter.type"></a>

- *Type:* str

The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#type GoogleAgentRegistryService#type}

---

###### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putAgentSpec.parameter.content"></a>

- *Type:* str

The content of the Agent spec in the JSON format.

This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#content GoogleAgentRegistryService#content}

---

##### `put_endpoint_spec` <a name="put_endpoint_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putEndpointSpec"></a>

```python
def put_endpoint_spec(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putEndpointSpec.parameter.type"></a>

- *Type:* str

The type of the Endpoint spec content. Possible values: ["NO_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#type GoogleAgentRegistryService#type}

---

##### `put_interfaces` <a name="put_interfaces" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putInterfaces"></a>

```python
def put_interfaces(
  value: IResolvable | typing.List[GoogleAgentRegistryServiceInterfaces]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces">GoogleAgentRegistryServiceInterfaces</a>]

---

##### `put_mcp_server_spec` <a name="put_mcp_server_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putMcpServerSpec"></a>

```python
def put_mcp_server_spec(
  type: str,
  content: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putMcpServerSpec.parameter.type"></a>

- *Type:* str

The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#type GoogleAgentRegistryService#type}

---

###### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putMcpServerSpec.parameter.content"></a>

- *Type:* str

The content of the MCP Server spec. This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#content GoogleAgentRegistryService#content}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#create GoogleAgentRegistryService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#delete GoogleAgentRegistryService#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#update GoogleAgentRegistryService#update}.

---

##### `reset_agent_spec` <a name="reset_agent_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetAgentSpec"></a>

```python
def reset_agent_spec() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_endpoint_spec` <a name="reset_endpoint_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetEndpointSpec"></a>

```python
def reset_endpoint_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interfaces` <a name="reset_interfaces" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetInterfaces"></a>

```python
def reset_interfaces() -> None
```

##### `reset_mcp_server_spec` <a name="reset_mcp_server_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetMcpServerSpec"></a>

```python
def reset_mcp_server_spec() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleAgentRegistryService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleAgentRegistryService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleAgentRegistryService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleAgentRegistryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleAgentRegistryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.agentSpec">agent_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference">GoogleAgentRegistryServiceAgentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.endpointSpec">endpoint_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference">GoogleAgentRegistryServiceEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.interfaces">interfaces</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList">GoogleAgentRegistryServiceInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.mcpServerSpec">mcp_server_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference">GoogleAgentRegistryServiceMcpServerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.registryResource">registry_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference">GoogleAgentRegistryServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.agentSpecInput">agent_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.endpointSpecInput">endpoint_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.interfacesInput">interfaces_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces">GoogleAgentRegistryServiceInterfaces</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.mcpServerSpecInput">mcp_server_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts">GoogleAgentRegistryServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_spec`<sup>Required</sup> <a name="agent_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.agentSpec"></a>

```python
agent_spec: GoogleAgentRegistryServiceAgentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference">GoogleAgentRegistryServiceAgentSpecOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `endpoint_spec`<sup>Required</sup> <a name="endpoint_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.endpointSpec"></a>

```python
endpoint_spec: GoogleAgentRegistryServiceEndpointSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference">GoogleAgentRegistryServiceEndpointSpecOutputReference</a>

---

##### `interfaces`<sup>Required</sup> <a name="interfaces" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.interfaces"></a>

```python
interfaces: GoogleAgentRegistryServiceInterfacesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList">GoogleAgentRegistryServiceInterfacesList</a>

---

##### `mcp_server_spec`<sup>Required</sup> <a name="mcp_server_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.mcpServerSpec"></a>

```python
mcp_server_spec: GoogleAgentRegistryServiceMcpServerSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference">GoogleAgentRegistryServiceMcpServerSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `registry_resource`<sup>Required</sup> <a name="registry_resource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.registryResource"></a>

```python
registry_resource: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.timeouts"></a>

```python
timeouts: GoogleAgentRegistryServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference">GoogleAgentRegistryServiceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `agent_spec_input`<sup>Optional</sup> <a name="agent_spec_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.agentSpecInput"></a>

```python
agent_spec_input: GoogleAgentRegistryServiceAgentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `endpoint_spec_input`<sup>Optional</sup> <a name="endpoint_spec_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.endpointSpecInput"></a>

```python
endpoint_spec_input: GoogleAgentRegistryServiceEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interfaces_input`<sup>Optional</sup> <a name="interfaces_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.interfacesInput"></a>

```python
interfaces_input: IResolvable | typing.List[GoogleAgentRegistryServiceInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces">GoogleAgentRegistryServiceInterfaces</a>]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mcp_server_spec_input`<sup>Optional</sup> <a name="mcp_server_spec_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.mcpServerSpecInput"></a>

```python
mcp_server_spec_input: GoogleAgentRegistryServiceMcpServerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleAgentRegistryServiceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts">GoogleAgentRegistryServiceTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAgentRegistryServiceAgentSpec <a name="GoogleAgentRegistryServiceAgentSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec(
  type: str,
  content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec.property.type">type</a></code> | <code>str</code> | The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"]. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec.property.content">content</a></code> | <code>str</code> | The content of the Agent spec in the JSON format. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#type GoogleAgentRegistryService#type}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec.property.content"></a>

```python
content: str
```

- *Type:* str

The content of the Agent spec in the JSON format.

This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#content GoogleAgentRegistryService#content}

---

### GoogleAgentRegistryServiceConfig <a name="GoogleAgentRegistryServiceConfig" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  service_id: str,
  agent_spec: GoogleAgentRegistryServiceAgentSpec = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  endpoint_spec: GoogleAgentRegistryServiceEndpointSpec = None,
  id: str = None,
  interfaces: IResolvable | typing.List[GoogleAgentRegistryServiceInterfaces] = None,
  mcp_server_spec: GoogleAgentRegistryServiceMcpServerSpec = None,
  project: str = None,
  timeouts: GoogleAgentRegistryServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.serviceId">service_id</a></code> | <code>str</code> | The name of the Service. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.agentSpec">agent_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a></code> | agent_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.description">description</a></code> | <code>str</code> | The description of the Service. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.displayName">display_name</a></code> | <code>str</code> | User-defined display name for the Service. Can have a maximum length of 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.endpointSpec">endpoint_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#id GoogleAgentRegistryService#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.interfaces">interfaces</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces">GoogleAgentRegistryServiceInterfaces</a>]</code> | interfaces block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.mcpServerSpec">mcp_server_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a></code> | mcp_server_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#project GoogleAgentRegistryService#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts">GoogleAgentRegistryServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#location GoogleAgentRegistryService#location}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

The name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#service_id GoogleAgentRegistryService#service_id}

---

##### `agent_spec`<sup>Optional</sup> <a name="agent_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.agentSpec"></a>

```python
agent_spec: GoogleAgentRegistryServiceAgentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a>

agent_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#agent_spec GoogleAgentRegistryService#agent_spec}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#deletion_policy GoogleAgentRegistryService#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#description GoogleAgentRegistryService#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-defined display name for the Service. Can have a maximum length of 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#display_name GoogleAgentRegistryService#display_name}

---

##### `endpoint_spec`<sup>Optional</sup> <a name="endpoint_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.endpointSpec"></a>

```python
endpoint_spec: GoogleAgentRegistryServiceEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#endpoint_spec GoogleAgentRegistryService#endpoint_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#id GoogleAgentRegistryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interfaces`<sup>Optional</sup> <a name="interfaces" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.interfaces"></a>

```python
interfaces: IResolvable | typing.List[GoogleAgentRegistryServiceInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces">GoogleAgentRegistryServiceInterfaces</a>]

interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#interfaces GoogleAgentRegistryService#interfaces}

---

##### `mcp_server_spec`<sup>Optional</sup> <a name="mcp_server_spec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.mcpServerSpec"></a>

```python
mcp_server_spec: GoogleAgentRegistryServiceMcpServerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a>

mcp_server_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#mcp_server_spec GoogleAgentRegistryService#mcp_server_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#project GoogleAgentRegistryService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceConfig.property.timeouts"></a>

```python
timeouts: GoogleAgentRegistryServiceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts">GoogleAgentRegistryServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#timeouts GoogleAgentRegistryService#timeouts}

---

### GoogleAgentRegistryServiceEndpointSpec <a name="GoogleAgentRegistryServiceEndpointSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec.property.type">type</a></code> | <code>str</code> | The type of the Endpoint spec content. Possible values: ["NO_SPEC"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the Endpoint spec content. Possible values: ["NO_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#type GoogleAgentRegistryService#type}

---

### GoogleAgentRegistryServiceInterfaces <a name="GoogleAgentRegistryServiceInterfaces" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces(
  protocol_binding: str,
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces.property.protocolBinding">protocol_binding</a></code> | <code>str</code> | The protocol binding of the interface. Possible values: ["JSONRPC", "GRPC", "HTTP_JSON"]. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces.property.url">url</a></code> | <code>str</code> | The destination URL. |

---

##### `protocol_binding`<sup>Required</sup> <a name="protocol_binding" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces.property.protocolBinding"></a>

```python
protocol_binding: str
```

- *Type:* str

The protocol binding of the interface. Possible values: ["JSONRPC", "GRPC", "HTTP_JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#protocol_binding GoogleAgentRegistryService#protocol_binding}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces.property.url"></a>

```python
url: str
```

- *Type:* str

The destination URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#url GoogleAgentRegistryService#url}

---

### GoogleAgentRegistryServiceMcpServerSpec <a name="GoogleAgentRegistryServiceMcpServerSpec" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec(
  type: str,
  content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec.property.type">type</a></code> | <code>str</code> | The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"]. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec.property.content">content</a></code> | <code>str</code> | The content of the MCP Server spec. This payload is validated against the schema for the specified type. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#type GoogleAgentRegistryService#type}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec.property.content"></a>

```python
content: str
```

- *Type:* str

The content of the MCP Server spec. This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#content GoogleAgentRegistryService#content}

---

### GoogleAgentRegistryServiceTimeouts <a name="GoogleAgentRegistryServiceTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#create GoogleAgentRegistryService#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#delete GoogleAgentRegistryService#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#update GoogleAgentRegistryService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#create GoogleAgentRegistryService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#delete GoogleAgentRegistryService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_agent_registry_service#update GoogleAgentRegistryService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAgentRegistryServiceAgentSpecOutputReference <a name="GoogleAgentRegistryServiceAgentSpecOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.resetContent">reset_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.resetContent"></a>

```python
def reset_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAgentRegistryServiceAgentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceAgentSpec">GoogleAgentRegistryServiceAgentSpec</a>

---


### GoogleAgentRegistryServiceEndpointSpecOutputReference <a name="GoogleAgentRegistryServiceEndpointSpecOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAgentRegistryServiceEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceEndpointSpec">GoogleAgentRegistryServiceEndpointSpec</a>

---


### GoogleAgentRegistryServiceInterfacesList <a name="GoogleAgentRegistryServiceInterfacesList" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAgentRegistryServiceInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces">GoogleAgentRegistryServiceInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleAgentRegistryServiceInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces">GoogleAgentRegistryServiceInterfaces</a>]

---


### GoogleAgentRegistryServiceInterfacesOutputReference <a name="GoogleAgentRegistryServiceInterfacesOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.protocolBindingInput">protocol_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.protocolBinding">protocol_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces">GoogleAgentRegistryServiceInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protocol_binding_input`<sup>Optional</sup> <a name="protocol_binding_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.protocolBindingInput"></a>

```python
protocol_binding_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `protocol_binding`<sup>Required</sup> <a name="protocol_binding" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.protocolBinding"></a>

```python
protocol_binding: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleAgentRegistryServiceInterfaces
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceInterfaces">GoogleAgentRegistryServiceInterfaces</a>

---


### GoogleAgentRegistryServiceMcpServerSpecOutputReference <a name="GoogleAgentRegistryServiceMcpServerSpecOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.resetContent">reset_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.resetContent"></a>

```python
def reset_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAgentRegistryServiceMcpServerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceMcpServerSpec">GoogleAgentRegistryServiceMcpServerSpec</a>

---


### GoogleAgentRegistryServiceTimeoutsOutputReference <a name="GoogleAgentRegistryServiceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_service

googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts">GoogleAgentRegistryServiceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleAgentRegistryServiceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAgentRegistryService.GoogleAgentRegistryServiceTimeouts">GoogleAgentRegistryServiceTimeouts</a>

---



