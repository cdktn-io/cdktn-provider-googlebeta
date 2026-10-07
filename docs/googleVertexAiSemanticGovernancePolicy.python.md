# `googleVertexAiSemanticGovernancePolicy` Submodule <a name="`googleVertexAiSemanticGovernancePolicy` Submodule" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiSemanticGovernancePolicy <a name="GoogleVertexAiSemanticGovernancePolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy google_vertex_ai_semantic_governance_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent: str,
  natural_language_constraint: str,
  semantic_governance_policy_id: str,
  agent_response_customization: GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  mcp_tools: GoogleVertexAiSemanticGovernancePolicyMcpTools = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiSemanticGovernancePolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.agent">agent</a></code> | <code>str</code> | The name of the agent in Agent Registry that is affected by this policy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.naturalLanguageConstraint">natural_language_constraint</a></code> | <code>str</code> | The natural language constraint of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.semanticGovernancePolicyId">semantic_governance_policy_id</a></code> | <code>str</code> | The ID of the SemanticGovernancePolicy, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.agentResponseCustomization">agent_response_customization</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | agent_response_customization block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-defined name of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#id GoogleVertexAiSemanticGovernancePolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.mcpTools">mcp_tools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a></code> | mcp_tools block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#project GoogleVertexAiSemanticGovernancePolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the SemanticGovernancePolicy, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.agent"></a>

- *Type:* str

The name of the agent in Agent Registry that is affected by this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#agent GoogleVertexAiSemanticGovernancePolicy#agent}

---

##### `natural_language_constraint`<sup>Required</sup> <a name="natural_language_constraint" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.naturalLanguageConstraint"></a>

- *Type:* str

The natural language constraint of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#natural_language_constraint GoogleVertexAiSemanticGovernancePolicy#natural_language_constraint}

---

##### `semantic_governance_policy_id`<sup>Required</sup> <a name="semantic_governance_policy_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.semanticGovernancePolicyId"></a>

- *Type:* str

The ID of the SemanticGovernancePolicy, which will become the final component of the resource name.

This value may be up to 63 characters, and valid characters are [a-z0-9-]. The first character cannot be a number or hyphen. The last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#semantic_governance_policy_id GoogleVertexAiSemanticGovernancePolicy#semantic_governance_policy_id}

---

##### `agent_response_customization`<sup>Optional</sup> <a name="agent_response_customization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.agentResponseCustomization"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

agent_response_customization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#agent_response_customization GoogleVertexAiSemanticGovernancePolicy#agent_response_customization}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#deletion_policy GoogleVertexAiSemanticGovernancePolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.description"></a>

- *Type:* str

The description of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#description GoogleVertexAiSemanticGovernancePolicy#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.displayName"></a>

- *Type:* str

The user-defined name of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#display_name GoogleVertexAiSemanticGovernancePolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#id GoogleVertexAiSemanticGovernancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcp_tools`<sup>Optional</sup> <a name="mcp_tools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.mcpTools"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a>

mcp_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#mcp_tools GoogleVertexAiSemanticGovernancePolicy#mcp_tools}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#project GoogleVertexAiSemanticGovernancePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.region"></a>

- *Type:* str

The region of the SemanticGovernancePolicy, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#region GoogleVertexAiSemanticGovernancePolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#timeouts GoogleVertexAiSemanticGovernancePolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putAgentResponseCustomization">put_agent_response_customization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putMcpTools">put_mcp_tools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetAgentResponseCustomization">reset_agent_response_customization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetMcpTools">reset_mcp_tools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_agent_response_customization` <a name="put_agent_response_customization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putAgentResponseCustomization"></a>

```python
def put_agent_response_customization(
  denial_message: str = None
) -> None
```

###### `denial_message`<sup>Optional</sup> <a name="denial_message" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putAgentResponseCustomization.parameter.denialMessage"></a>

- *Type:* str

Custom message shown to the end user when the policy check results in a denial.

Use this
to explain the rationale to the user. Max 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#denial_message GoogleVertexAiSemanticGovernancePolicy#denial_message}

---

##### `put_mcp_tools` <a name="put_mcp_tools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putMcpTools"></a>

```python
def put_mcp_tools(
  mcp_server: str,
  tools: typing.List[str]
) -> None
```

###### `mcp_server`<sup>Required</sup> <a name="mcp_server" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putMcpTools.parameter.mcpServer"></a>

- *Type:* str

The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#mcp_server GoogleVertexAiSemanticGovernancePolicy#mcp_server}

---

###### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putMcpTools.parameter.tools"></a>

- *Type:* typing.List[str]

The resource names of the McpTools used by the Agent that is affected by this policy.

At least one tool must be listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#tools GoogleVertexAiSemanticGovernancePolicy#tools}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#create GoogleVertexAiSemanticGovernancePolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#delete GoogleVertexAiSemanticGovernancePolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#update GoogleVertexAiSemanticGovernancePolicy#update}.

---

##### `reset_agent_response_customization` <a name="reset_agent_response_customization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetAgentResponseCustomization"></a>

```python
def reset_agent_response_customization() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mcp_tools` <a name="reset_mcp_tools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetMcpTools"></a>

```python
def reset_mcp_tools() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiSemanticGovernancePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiSemanticGovernancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiSemanticGovernancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentIdentity">agent_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentResponseCustomization">agent_response_customization</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.mcpTools">mcp_tools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference">GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference">GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentInput">agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput">agent_response_customization_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.mcpToolsInput">mcp_tools_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput">natural_language_constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput">semantic_governance_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agent">agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint">natural_language_constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId">semantic_governance_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_identity`<sup>Required</sup> <a name="agent_identity" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentIdentity"></a>

```python
agent_identity: str
```

- *Type:* str

---

##### `agent_response_customization`<sup>Required</sup> <a name="agent_response_customization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentResponseCustomization"></a>

```python
agent_response_customization: GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `mcp_tools`<sup>Required</sup> <a name="mcp_tools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.mcpTools"></a>

```python
mcp_tools: GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference">GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.timeouts"></a>

```python
timeouts: GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference">GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `agent_input`<sup>Optional</sup> <a name="agent_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentInput"></a>

```python
agent_input: str
```

- *Type:* str

---

##### `agent_response_customization_input`<sup>Optional</sup> <a name="agent_response_customization_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput"></a>

```python
agent_response_customization_input: GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mcp_tools_input`<sup>Optional</sup> <a name="mcp_tools_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.mcpToolsInput"></a>

```python
mcp_tools_input: GoogleVertexAiSemanticGovernancePolicyMcpTools
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a>

---

##### `natural_language_constraint_input`<sup>Optional</sup> <a name="natural_language_constraint_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput"></a>

```python
natural_language_constraint_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `semantic_governance_policy_id_input`<sup>Optional</sup> <a name="semantic_governance_policy_id_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput"></a>

```python
semantic_governance_policy_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiSemanticGovernancePolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a>

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agent"></a>

```python
agent: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `natural_language_constraint`<sup>Required</sup> <a name="natural_language_constraint" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint"></a>

```python
natural_language_constraint: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `semantic_governance_policy_id`<sup>Required</sup> <a name="semantic_governance_policy_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId"></a>

```python
semantic_governance_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization <a name="GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization(
  denial_message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage">denial_message</a></code> | <code>str</code> | Custom message shown to the end user when the policy check results in a denial. |

---

##### `denial_message`<sup>Optional</sup> <a name="denial_message" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage"></a>

```python
denial_message: str
```

- *Type:* str

Custom message shown to the end user when the policy check results in a denial.

Use this
to explain the rationale to the user. Max 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#denial_message GoogleVertexAiSemanticGovernancePolicy#denial_message}

---

### GoogleVertexAiSemanticGovernancePolicyConfig <a name="GoogleVertexAiSemanticGovernancePolicyConfig" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent: str,
  natural_language_constraint: str,
  semantic_governance_policy_id: str,
  agent_response_customization: GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  mcp_tools: GoogleVertexAiSemanticGovernancePolicyMcpTools = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiSemanticGovernancePolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.agent">agent</a></code> | <code>str</code> | The name of the agent in Agent Registry that is affected by this policy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint">natural_language_constraint</a></code> | <code>str</code> | The natural language constraint of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId">semantic_governance_policy_id</a></code> | <code>str</code> | The ID of the SemanticGovernancePolicy, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization">agent_response_customization</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | agent_response_customization block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.description">description</a></code> | <code>str</code> | The description of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-defined name of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#id GoogleVertexAiSemanticGovernancePolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.mcpTools">mcp_tools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a></code> | mcp_tools block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#project GoogleVertexAiSemanticGovernancePolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.region">region</a></code> | <code>str</code> | The region of the SemanticGovernancePolicy, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.agent"></a>

```python
agent: str
```

- *Type:* str

The name of the agent in Agent Registry that is affected by this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#agent GoogleVertexAiSemanticGovernancePolicy#agent}

---

##### `natural_language_constraint`<sup>Required</sup> <a name="natural_language_constraint" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint"></a>

```python
natural_language_constraint: str
```

- *Type:* str

The natural language constraint of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#natural_language_constraint GoogleVertexAiSemanticGovernancePolicy#natural_language_constraint}

---

##### `semantic_governance_policy_id`<sup>Required</sup> <a name="semantic_governance_policy_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId"></a>

```python
semantic_governance_policy_id: str
```

- *Type:* str

The ID of the SemanticGovernancePolicy, which will become the final component of the resource name.

This value may be up to 63 characters, and valid characters are [a-z0-9-]. The first character cannot be a number or hyphen. The last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#semantic_governance_policy_id GoogleVertexAiSemanticGovernancePolicy#semantic_governance_policy_id}

---

##### `agent_response_customization`<sup>Optional</sup> <a name="agent_response_customization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization"></a>

```python
agent_response_customization: GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

agent_response_customization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#agent_response_customization GoogleVertexAiSemanticGovernancePolicy#agent_response_customization}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#deletion_policy GoogleVertexAiSemanticGovernancePolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#description GoogleVertexAiSemanticGovernancePolicy#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-defined name of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#display_name GoogleVertexAiSemanticGovernancePolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#id GoogleVertexAiSemanticGovernancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcp_tools`<sup>Optional</sup> <a name="mcp_tools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.mcpTools"></a>

```python
mcp_tools: GoogleVertexAiSemanticGovernancePolicyMcpTools
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a>

mcp_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#mcp_tools GoogleVertexAiSemanticGovernancePolicy#mcp_tools}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#project GoogleVertexAiSemanticGovernancePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the SemanticGovernancePolicy, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#region GoogleVertexAiSemanticGovernancePolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiSemanticGovernancePolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#timeouts GoogleVertexAiSemanticGovernancePolicy#timeouts}

---

### GoogleVertexAiSemanticGovernancePolicyMcpTools <a name="GoogleVertexAiSemanticGovernancePolicyMcpTools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools(
  mcp_server: str,
  tools: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.property.mcpServer">mcp_server</a></code> | <code>str</code> | The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.property.tools">tools</a></code> | <code>typing.List[str]</code> | The resource names of the McpTools used by the Agent that is affected by this policy. |

---

##### `mcp_server`<sup>Required</sup> <a name="mcp_server" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.property.mcpServer"></a>

```python
mcp_server: str
```

- *Type:* str

The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#mcp_server GoogleVertexAiSemanticGovernancePolicy#mcp_server}

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

The resource names of the McpTools used by the Agent that is affected by this policy.

At least one tool must be listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#tools GoogleVertexAiSemanticGovernancePolicy#tools}

---

### GoogleVertexAiSemanticGovernancePolicyTimeouts <a name="GoogleVertexAiSemanticGovernancePolicyTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#create GoogleVertexAiSemanticGovernancePolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#delete GoogleVertexAiSemanticGovernancePolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#update GoogleVertexAiSemanticGovernancePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#create GoogleVertexAiSemanticGovernancePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#delete GoogleVertexAiSemanticGovernancePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#update GoogleVertexAiSemanticGovernancePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference <a name="GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage">reset_denial_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_denial_message` <a name="reset_denial_message" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage"></a>

```python
def reset_denial_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput">denial_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage">denial_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `denial_message_input`<sup>Optional</sup> <a name="denial_message_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput"></a>

```python
denial_message_input: str
```

- *Type:* str

---

##### `denial_message`<sup>Required</sup> <a name="denial_message" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage"></a>

```python
denial_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---


### GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference <a name="GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput">mcp_server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput">tools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer">mcp_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools">tools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mcp_server_input`<sup>Optional</sup> <a name="mcp_server_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput"></a>

```python
mcp_server_input: str
```

- *Type:* str

---

##### `tools_input`<sup>Optional</sup> <a name="tools_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput"></a>

```python
tools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mcp_server`<sup>Required</sup> <a name="mcp_server" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer"></a>

```python
mcp_server: str
```

- *Type:* str

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiSemanticGovernancePolicyMcpTools
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a>

---


### GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference <a name="GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiSemanticGovernancePolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a>

---



