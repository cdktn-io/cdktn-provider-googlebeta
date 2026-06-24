# `googleDiscoveryEngineControl` Submodule <a name="`googleDiscoveryEngineControl` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineControl <a name="GoogleDiscoveryEngineControl" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control google_discovery_engine_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControl;

GoogleDiscoveryEngineControl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .controlId(java.lang.String)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
    .solutionType(java.lang.String)
//  .boostAction(GoogleDiscoveryEngineControlBoostAction)
//  .collectionId(java.lang.String)
//  .conditions(IResolvable|java.util.List<GoogleDiscoveryEngineControlConditions>)
//  .deletionPolicy(java.lang.String)
//  .filterAction(GoogleDiscoveryEngineControlFilterAction)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .promoteAction(GoogleDiscoveryEngineControlPromoteAction)
//  .redirectAction(GoogleDiscoveryEngineControlRedirectAction)
//  .synonymsAction(GoogleDiscoveryEngineControlSynonymsAction)
//  .timeouts(GoogleDiscoveryEngineControlTimeouts)
//  .useCases(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.controlId">controlId</a></code> | <code>java.lang.String</code> | The unique id of the control. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the control. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.engineId">engineId</a></code> | <code>java.lang.String</code> | The engine to add the control to. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.solutionType">solutionType</a></code> | <code>java.lang.String</code> | The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.boostAction">boostAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a></code> | boost_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>></code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.filterAction">filterAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a></code> | filter_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#id GoogleDiscoveryEngineControl#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#project GoogleDiscoveryEngineControl#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.promoteAction">promoteAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a></code> | promote_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.redirectAction">redirectAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a></code> | redirect_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.synonymsAction">synonymsAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a></code> | synonyms_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.useCases">useCases</a></code> | <code>java.util.List<java.lang.String></code> | The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.controlId"></a>

- *Type:* java.lang.String

The unique id of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#control_id GoogleDiscoveryEngineControl#control_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the control.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#display_name GoogleDiscoveryEngineControl#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.engineId"></a>

- *Type:* java.lang.String

The engine to add the control to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#engine_id GoogleDiscoveryEngineControl#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#location GoogleDiscoveryEngineControl#location}

---

##### `solutionType`<sup>Required</sup> <a name="solutionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.solutionType"></a>

- *Type:* java.lang.String

The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#solution_type GoogleDiscoveryEngineControl#solution_type}

---

##### `boostAction`<sup>Optional</sup> <a name="boostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.boostAction"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a>

boost_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#boost_action GoogleDiscoveryEngineControl#boost_action}

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#collection_id GoogleDiscoveryEngineControl#collection_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.conditions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#conditions GoogleDiscoveryEngineControl#conditions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#deletion_policy GoogleDiscoveryEngineControl#deletion_policy}

---

##### `filterAction`<sup>Optional</sup> <a name="filterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.filterAction"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a>

filter_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#filter_action GoogleDiscoveryEngineControl#filter_action}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#id GoogleDiscoveryEngineControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#project GoogleDiscoveryEngineControl#project}.

---

##### `promoteAction`<sup>Optional</sup> <a name="promoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.promoteAction"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a>

promote_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#promote_action GoogleDiscoveryEngineControl#promote_action}

---

##### `redirectAction`<sup>Optional</sup> <a name="redirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.redirectAction"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a>

redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#redirect_action GoogleDiscoveryEngineControl#redirect_action}

---

##### `synonymsAction`<sup>Optional</sup> <a name="synonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.synonymsAction"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a>

synonyms_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#synonyms_action GoogleDiscoveryEngineControl#synonyms_action}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#timeouts GoogleDiscoveryEngineControl#timeouts}

---

##### `useCases`<sup>Optional</sup> <a name="useCases" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.useCases"></a>

- *Type:* java.util.List<java.lang.String>

The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#use_cases GoogleDiscoveryEngineControl#use_cases}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putBoostAction">putBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putFilterAction">putFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putPromoteAction">putPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putRedirectAction">putRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putSynonymsAction">putSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetBoostAction">resetBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetCollectionId">resetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetFilterAction">resetFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetPromoteAction">resetPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetRedirectAction">resetRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetSynonymsAction">resetSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetUseCases">resetUseCases</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBoostAction` <a name="putBoostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putBoostAction"></a>

```java
public void putBoostAction(GoogleDiscoveryEngineControlBoostAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putBoostAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a>

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<GoogleDiscoveryEngineControlConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>>

---

##### `putFilterAction` <a name="putFilterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putFilterAction"></a>

```java
public void putFilterAction(GoogleDiscoveryEngineControlFilterAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putFilterAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a>

---

##### `putPromoteAction` <a name="putPromoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putPromoteAction"></a>

```java
public void putPromoteAction(GoogleDiscoveryEngineControlPromoteAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putPromoteAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a>

---

##### `putRedirectAction` <a name="putRedirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putRedirectAction"></a>

```java
public void putRedirectAction(GoogleDiscoveryEngineControlRedirectAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putRedirectAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a>

---

##### `putSynonymsAction` <a name="putSynonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putSynonymsAction"></a>

```java
public void putSynonymsAction(GoogleDiscoveryEngineControlSynonymsAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putSynonymsAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putTimeouts"></a>

```java
public void putTimeouts(GoogleDiscoveryEngineControlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a>

---

##### `resetBoostAction` <a name="resetBoostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetBoostAction"></a>

```java
public void resetBoostAction()
```

##### `resetCollectionId` <a name="resetCollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetCollectionId"></a>

```java
public void resetCollectionId()
```

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetFilterAction` <a name="resetFilterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetFilterAction"></a>

```java
public void resetFilterAction()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetProject"></a>

```java
public void resetProject()
```

##### `resetPromoteAction` <a name="resetPromoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetPromoteAction"></a>

```java
public void resetPromoteAction()
```

##### `resetRedirectAction` <a name="resetRedirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetRedirectAction"></a>

```java
public void resetRedirectAction()
```

##### `resetSynonymsAction` <a name="resetSynonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetSynonymsAction"></a>

```java
public void resetSynonymsAction()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUseCases` <a name="resetUseCases" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetUseCases"></a>

```java
public void resetUseCases()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControl;

GoogleDiscoveryEngineControl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControl;

GoogleDiscoveryEngineControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControl;

GoogleDiscoveryEngineControl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControl;

GoogleDiscoveryEngineControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDiscoveryEngineControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDiscoveryEngineControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDiscoveryEngineControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.boostAction">boostAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference">GoogleDiscoveryEngineControlBoostActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList">GoogleDiscoveryEngineControlConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.filterAction">filterAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference">GoogleDiscoveryEngineControlFilterActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.promoteAction">promoteAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference">GoogleDiscoveryEngineControlPromoteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.redirectAction">redirectAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference">GoogleDiscoveryEngineControlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.synonymsAction">synonymsAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference">GoogleDiscoveryEngineControlSynonymsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference">GoogleDiscoveryEngineControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.boostActionInput">boostActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.controlIdInput">controlIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.engineIdInput">engineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.filterActionInput">filterActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.promoteActionInput">promoteActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.redirectActionInput">redirectActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.solutionTypeInput">solutionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.synonymsActionInput">synonymsActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.useCasesInput">useCasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.controlId">controlId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.engineId">engineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.solutionType">solutionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.useCases">useCases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `boostAction`<sup>Required</sup> <a name="boostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.boostAction"></a>

```java
public GoogleDiscoveryEngineControlBoostActionOutputReference getBoostAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference">GoogleDiscoveryEngineControlBoostActionOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.conditions"></a>

```java
public GoogleDiscoveryEngineControlConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList">GoogleDiscoveryEngineControlConditionsList</a>

---

##### `filterAction`<sup>Required</sup> <a name="filterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.filterAction"></a>

```java
public GoogleDiscoveryEngineControlFilterActionOutputReference getFilterAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference">GoogleDiscoveryEngineControlFilterActionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `promoteAction`<sup>Required</sup> <a name="promoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.promoteAction"></a>

```java
public GoogleDiscoveryEngineControlPromoteActionOutputReference getPromoteAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference">GoogleDiscoveryEngineControlPromoteActionOutputReference</a>

---

##### `redirectAction`<sup>Required</sup> <a name="redirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.redirectAction"></a>

```java
public GoogleDiscoveryEngineControlRedirectActionOutputReference getRedirectAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference">GoogleDiscoveryEngineControlRedirectActionOutputReference</a>

---

##### `synonymsAction`<sup>Required</sup> <a name="synonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.synonymsAction"></a>

```java
public GoogleDiscoveryEngineControlSynonymsActionOutputReference getSynonymsAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference">GoogleDiscoveryEngineControlSynonymsActionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.timeouts"></a>

```java
public GoogleDiscoveryEngineControlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference">GoogleDiscoveryEngineControlTimeoutsOutputReference</a>

---

##### `boostActionInput`<sup>Optional</sup> <a name="boostActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.boostActionInput"></a>

```java
public GoogleDiscoveryEngineControlBoostAction getBoostActionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a>

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<GoogleDiscoveryEngineControlConditions> getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>>

---

##### `controlIdInput`<sup>Optional</sup> <a name="controlIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.controlIdInput"></a>

```java
public java.lang.String getControlIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.engineIdInput"></a>

```java
public java.lang.String getEngineIdInput();
```

- *Type:* java.lang.String

---

##### `filterActionInput`<sup>Optional</sup> <a name="filterActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.filterActionInput"></a>

```java
public GoogleDiscoveryEngineControlFilterAction getFilterActionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `promoteActionInput`<sup>Optional</sup> <a name="promoteActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.promoteActionInput"></a>

```java
public GoogleDiscoveryEngineControlPromoteAction getPromoteActionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a>

---

##### `redirectActionInput`<sup>Optional</sup> <a name="redirectActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.redirectActionInput"></a>

```java
public GoogleDiscoveryEngineControlRedirectAction getRedirectActionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a>

---

##### `solutionTypeInput`<sup>Optional</sup> <a name="solutionTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.solutionTypeInput"></a>

```java
public java.lang.String getSolutionTypeInput();
```

- *Type:* java.lang.String

---

##### `synonymsActionInput`<sup>Optional</sup> <a name="synonymsActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.synonymsActionInput"></a>

```java
public GoogleDiscoveryEngineControlSynonymsAction getSynonymsActionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDiscoveryEngineControlTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a>

---

##### `useCasesInput`<sup>Optional</sup> <a name="useCasesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.useCasesInput"></a>

```java
public java.util.List<java.lang.String> getUseCasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.controlId"></a>

```java
public java.lang.String getControlId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `solutionType`<sup>Required</sup> <a name="solutionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.solutionType"></a>

```java
public java.lang.String getSolutionType();
```

- *Type:* java.lang.String

---

##### `useCases`<sup>Required</sup> <a name="useCases" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.useCases"></a>

```java
public java.util.List<java.lang.String> getUseCases();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineControlBoostAction <a name="GoogleDiscoveryEngineControlBoostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlBoostAction;

GoogleDiscoveryEngineControlBoostAction.builder()
    .dataStore(java.lang.String)
    .filter(java.lang.String)
//  .fixedBoost(java.lang.Number)
//  .interpolationBoostSpec(GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | The data store to boost. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.filter">filter</a></code> | <code>java.lang.String</code> | The filter to apply to the search results. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.fixedBoost">fixedBoost</a></code> | <code>java.lang.Number</code> | The fixed boost value to apply to the search results. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.interpolationBoostSpec">interpolationBoostSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | interpolation_boost_spec block. |

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

The data store to boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#data_store GoogleDiscoveryEngineControl#data_store}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#filter GoogleDiscoveryEngineControl#filter}

---

##### `fixedBoost`<sup>Optional</sup> <a name="fixedBoost" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.fixedBoost"></a>

```java
public java.lang.Number getFixedBoost();
```

- *Type:* java.lang.Number

The fixed boost value to apply to the search results.

Positive values will increase the relevance of the results, while negative values will decrease the relevance. The value must be between -100 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#fixed_boost GoogleDiscoveryEngineControl#fixed_boost}

---

##### `interpolationBoostSpec`<sup>Optional</sup> <a name="interpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.interpolationBoostSpec"></a>

```java
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec getInterpolationBoostSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

interpolation_boost_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#interpolation_boost_spec GoogleDiscoveryEngineControl#interpolation_boost_spec}

---

### GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec <a name="GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec;

GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.builder()
//  .attributeType(java.lang.String)
//  .controlPoint(GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint)
//  .fieldName(java.lang.String)
//  .interpolationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType">attributeType</a></code> | <code>java.lang.String</code> | The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint">controlPoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | control_point block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | The name of the field whose value will be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType">interpolationType</a></code> | <code>java.lang.String</code> | The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"]. |

---

##### `attributeType`<sup>Optional</sup> <a name="attributeType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType"></a>

```java
public java.lang.String getAttributeType();
```

- *Type:* java.lang.String

The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#attribute_type GoogleDiscoveryEngineControl#attribute_type}

---

##### `controlPoint`<sup>Optional</sup> <a name="controlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint"></a>

```java
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint getControlPoint();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

control_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#control_point GoogleDiscoveryEngineControl#control_point}

---

##### `fieldName`<sup>Optional</sup> <a name="fieldName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#field_name GoogleDiscoveryEngineControl#field_name}

---

##### `interpolationType`<sup>Optional</sup> <a name="interpolationType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType"></a>

```java
public java.lang.String getInterpolationType();
```

- *Type:* java.lang.String

The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#interpolation_type GoogleDiscoveryEngineControl#interpolation_type}

---

### GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint <a name="GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint;

GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.builder()
//  .attributeValue(java.lang.String)
//  .boostAmount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | The attribute value of the control point. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount">boostAmount</a></code> | <code>java.lang.Number</code> | The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above. |

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

The attribute value of the control point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#attribute_value GoogleDiscoveryEngineControl#attribute_value}

---

##### `boostAmount`<sup>Optional</sup> <a name="boostAmount" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount"></a>

```java
public java.lang.Number getBoostAmount();
```

- *Type:* java.lang.Number

The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#boost_amount GoogleDiscoveryEngineControl#boost_amount}

---

### GoogleDiscoveryEngineControlConditions <a name="GoogleDiscoveryEngineControlConditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlConditions;

GoogleDiscoveryEngineControlConditions.builder()
//  .activeTimeRange(IResolvable|java.util.List<GoogleDiscoveryEngineControlConditionsActiveTimeRange>)
//  .queryRegex(java.lang.String)
//  .queryTerms(IResolvable|java.util.List<GoogleDiscoveryEngineControlConditionsQueryTerms>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.activeTimeRange">activeTimeRange</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>></code> | active_time_range block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.queryRegex">queryRegex</a></code> | <code>java.lang.String</code> | The regular expression that the query must match for this condition to be met. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.queryTerms">queryTerms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>></code> | query_terms block. |

---

##### `activeTimeRange`<sup>Optional</sup> <a name="activeTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.activeTimeRange"></a>

```java
public IResolvable|java.util.List<GoogleDiscoveryEngineControlConditionsActiveTimeRange> getActiveTimeRange();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>>

active_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#active_time_range GoogleDiscoveryEngineControl#active_time_range}

---

##### `queryRegex`<sup>Optional</sup> <a name="queryRegex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.queryRegex"></a>

```java
public java.lang.String getQueryRegex();
```

- *Type:* java.lang.String

The regular expression that the query must match for this condition to be met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#query_regex GoogleDiscoveryEngineControl#query_regex}

---

##### `queryTerms`<sup>Optional</sup> <a name="queryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.queryTerms"></a>

```java
public IResolvable|java.util.List<GoogleDiscoveryEngineControlConditionsQueryTerms> getQueryTerms();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>>

query_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#query_terms GoogleDiscoveryEngineControl#query_terms}

---

### GoogleDiscoveryEngineControlConditionsActiveTimeRange <a name="GoogleDiscoveryEngineControlConditionsActiveTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlConditionsActiveTimeRange;

GoogleDiscoveryEngineControlConditionsActiveTimeRange.builder()
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The end time of the active time range. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The start time of the active time range. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The end time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#end_time GoogleDiscoveryEngineControl#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The start time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#start_time GoogleDiscoveryEngineControl#start_time}

---

### GoogleDiscoveryEngineControlConditionsQueryTerms <a name="GoogleDiscoveryEngineControlConditionsQueryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlConditionsQueryTerms;

GoogleDiscoveryEngineControlConditionsQueryTerms.builder()
//  .fullMatch(java.lang.Boolean|IResolvable)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.property.fullMatch">fullMatch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the query term must be an exact match. Otherwise, the query term can be a partial match. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.property.value">value</a></code> | <code>java.lang.String</code> | The value of the query term. |

---

##### `fullMatch`<sup>Optional</sup> <a name="fullMatch" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.property.fullMatch"></a>

```java
public java.lang.Boolean|IResolvable getFullMatch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the query term must be an exact match. Otherwise, the query term can be a partial match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#full_match GoogleDiscoveryEngineControl#full_match}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the query term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#value GoogleDiscoveryEngineControl#value}

---

### GoogleDiscoveryEngineControlConfig <a name="GoogleDiscoveryEngineControlConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlConfig;

GoogleDiscoveryEngineControlConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .controlId(java.lang.String)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
    .solutionType(java.lang.String)
//  .boostAction(GoogleDiscoveryEngineControlBoostAction)
//  .collectionId(java.lang.String)
//  .conditions(IResolvable|java.util.List<GoogleDiscoveryEngineControlConditions>)
//  .deletionPolicy(java.lang.String)
//  .filterAction(GoogleDiscoveryEngineControlFilterAction)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .promoteAction(GoogleDiscoveryEngineControlPromoteAction)
//  .redirectAction(GoogleDiscoveryEngineControlRedirectAction)
//  .synonymsAction(GoogleDiscoveryEngineControlSynonymsAction)
//  .timeouts(GoogleDiscoveryEngineControlTimeouts)
//  .useCases(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.controlId">controlId</a></code> | <code>java.lang.String</code> | The unique id of the control. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the control. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.engineId">engineId</a></code> | <code>java.lang.String</code> | The engine to add the control to. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.solutionType">solutionType</a></code> | <code>java.lang.String</code> | The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.boostAction">boostAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a></code> | boost_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>></code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.filterAction">filterAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a></code> | filter_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#id GoogleDiscoveryEngineControl#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#project GoogleDiscoveryEngineControl#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.promoteAction">promoteAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a></code> | promote_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.redirectAction">redirectAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a></code> | redirect_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.synonymsAction">synonymsAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a></code> | synonyms_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.useCases">useCases</a></code> | <code>java.util.List<java.lang.String></code> | The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.controlId"></a>

```java
public java.lang.String getControlId();
```

- *Type:* java.lang.String

The unique id of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#control_id GoogleDiscoveryEngineControl#control_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the control.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#display_name GoogleDiscoveryEngineControl#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

The engine to add the control to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#engine_id GoogleDiscoveryEngineControl#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#location GoogleDiscoveryEngineControl#location}

---

##### `solutionType`<sup>Required</sup> <a name="solutionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.solutionType"></a>

```java
public java.lang.String getSolutionType();
```

- *Type:* java.lang.String

The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#solution_type GoogleDiscoveryEngineControl#solution_type}

---

##### `boostAction`<sup>Optional</sup> <a name="boostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.boostAction"></a>

```java
public GoogleDiscoveryEngineControlBoostAction getBoostAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a>

boost_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#boost_action GoogleDiscoveryEngineControl#boost_action}

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#collection_id GoogleDiscoveryEngineControl#collection_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.conditions"></a>

```java
public IResolvable|java.util.List<GoogleDiscoveryEngineControlConditions> getConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#conditions GoogleDiscoveryEngineControl#conditions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#deletion_policy GoogleDiscoveryEngineControl#deletion_policy}

---

##### `filterAction`<sup>Optional</sup> <a name="filterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.filterAction"></a>

```java
public GoogleDiscoveryEngineControlFilterAction getFilterAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a>

filter_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#filter_action GoogleDiscoveryEngineControl#filter_action}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#id GoogleDiscoveryEngineControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#project GoogleDiscoveryEngineControl#project}.

---

##### `promoteAction`<sup>Optional</sup> <a name="promoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.promoteAction"></a>

```java
public GoogleDiscoveryEngineControlPromoteAction getPromoteAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a>

promote_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#promote_action GoogleDiscoveryEngineControl#promote_action}

---

##### `redirectAction`<sup>Optional</sup> <a name="redirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.redirectAction"></a>

```java
public GoogleDiscoveryEngineControlRedirectAction getRedirectAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a>

redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#redirect_action GoogleDiscoveryEngineControl#redirect_action}

---

##### `synonymsAction`<sup>Optional</sup> <a name="synonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.synonymsAction"></a>

```java
public GoogleDiscoveryEngineControlSynonymsAction getSynonymsAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a>

synonyms_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#synonyms_action GoogleDiscoveryEngineControl#synonyms_action}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.timeouts"></a>

```java
public GoogleDiscoveryEngineControlTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#timeouts GoogleDiscoveryEngineControl#timeouts}

---

##### `useCases`<sup>Optional</sup> <a name="useCases" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.useCases"></a>

```java
public java.util.List<java.lang.String> getUseCases();
```

- *Type:* java.util.List<java.lang.String>

The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#use_cases GoogleDiscoveryEngineControl#use_cases}

---

### GoogleDiscoveryEngineControlFilterAction <a name="GoogleDiscoveryEngineControlFilterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlFilterAction;

GoogleDiscoveryEngineControlFilterAction.builder()
    .dataStore(java.lang.String)
    .filter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | The data store to filter. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.property.filter">filter</a></code> | <code>java.lang.String</code> | The filter to apply to the search results. |

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

The data store to filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#data_store GoogleDiscoveryEngineControl#data_store}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#filter GoogleDiscoveryEngineControl#filter}

---

### GoogleDiscoveryEngineControlPromoteAction <a name="GoogleDiscoveryEngineControlPromoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlPromoteAction;

GoogleDiscoveryEngineControlPromoteAction.builder()
    .dataStore(java.lang.String)
    .searchLinkPromotion(GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | The data store to promote. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.property.searchLinkPromotion">searchLinkPromotion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | search_link_promotion block. |

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

The data store to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#data_store GoogleDiscoveryEngineControl#data_store}

---

##### `searchLinkPromotion`<sup>Required</sup> <a name="searchLinkPromotion" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.property.searchLinkPromotion"></a>

```java
public GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion getSearchLinkPromotion();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

search_link_promotion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#search_link_promotion GoogleDiscoveryEngineControl#search_link_promotion}

---

### GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion <a name="GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion;

GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.builder()
    .title(java.lang.String)
//  .description(java.lang.String)
//  .document(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .imageUri(java.lang.String)
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title">title</a></code> | <code>java.lang.String</code> | The title of the promoted link. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description">description</a></code> | <code>java.lang.String</code> | The description of the promoted link. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document">document</a></code> | <code>java.lang.String</code> | The document to promote. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Return promotions for basic site search. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | The image URI of the promoted link. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri">uri</a></code> | <code>java.lang.String</code> | The URI to promote. |

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The title of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#title GoogleDiscoveryEngineControl#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#description GoogleDiscoveryEngineControl#description}

---

##### `document`<sup>Optional</sup> <a name="document" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document"></a>

```java
public java.lang.String getDocument();
```

- *Type:* java.lang.String

The document to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#document GoogleDiscoveryEngineControl#document}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Return promotions for basic site search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#enabled GoogleDiscoveryEngineControl#enabled}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

The image URI of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#image_uri GoogleDiscoveryEngineControl#image_uri}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The URI to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#uri GoogleDiscoveryEngineControl#uri}

---

### GoogleDiscoveryEngineControlRedirectAction <a name="GoogleDiscoveryEngineControlRedirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlRedirectAction;

GoogleDiscoveryEngineControlRedirectAction.builder()
    .redirectUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | The URI to redirect to. |

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

The URI to redirect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#redirect_uri GoogleDiscoveryEngineControl#redirect_uri}

---

### GoogleDiscoveryEngineControlSynonymsAction <a name="GoogleDiscoveryEngineControlSynonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlSynonymsAction;

GoogleDiscoveryEngineControlSynonymsAction.builder()
//  .synonyms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | The synonyms to apply to the search results. |

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

The synonyms to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#synonyms GoogleDiscoveryEngineControl#synonyms}

---

### GoogleDiscoveryEngineControlTimeouts <a name="GoogleDiscoveryEngineControlTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlTimeouts;

GoogleDiscoveryEngineControlTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#create GoogleDiscoveryEngineControl#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#delete GoogleDiscoveryEngineControl#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#update GoogleDiscoveryEngineControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#create GoogleDiscoveryEngineControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#delete GoogleDiscoveryEngineControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#update GoogleDiscoveryEngineControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference <a name="GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference;

new GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount">resetBoostAmount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```

##### `resetBoostAmount` <a name="resetBoostAmount" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount"></a>

```java
public void resetBoostAmount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput">boostAmountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount">boostAmount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `boostAmountInput`<sup>Optional</sup> <a name="boostAmountInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput"></a>

```java
public java.lang.Number getBoostAmountInput();
```

- *Type:* java.lang.Number

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `boostAmount`<sup>Required</sup> <a name="boostAmount" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount"></a>

```java
public java.lang.Number getBoostAmount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---


### GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference <a name="GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference;

new GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint">putControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType">resetAttributeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint">resetControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName">resetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType">resetInterpolationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPoint` <a name="putControlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint"></a>

```java
public void putControlPoint(GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---

##### `resetAttributeType` <a name="resetAttributeType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType"></a>

```java
public void resetAttributeType()
```

##### `resetControlPoint` <a name="resetControlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint"></a>

```java
public void resetControlPoint()
```

##### `resetFieldName` <a name="resetFieldName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName"></a>

```java
public void resetFieldName()
```

##### `resetInterpolationType` <a name="resetInterpolationType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType"></a>

```java
public void resetInterpolationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint">controlPoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput">attributeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput">controlPointInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput">interpolationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType">attributeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType">interpolationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPoint`<sup>Required</sup> <a name="controlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint"></a>

```java
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference getControlPoint();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a>

---

##### `attributeTypeInput`<sup>Optional</sup> <a name="attributeTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput"></a>

```java
public java.lang.String getAttributeTypeInput();
```

- *Type:* java.lang.String

---

##### `controlPointInput`<sup>Optional</sup> <a name="controlPointInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput"></a>

```java
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint getControlPointInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput"></a>

```java
public java.lang.String getFieldNameInput();
```

- *Type:* java.lang.String

---

##### `interpolationTypeInput`<sup>Optional</sup> <a name="interpolationTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput"></a>

```java
public java.lang.String getInterpolationTypeInput();
```

- *Type:* java.lang.String

---

##### `attributeType`<sup>Required</sup> <a name="attributeType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType"></a>

```java
public java.lang.String getAttributeType();
```

- *Type:* java.lang.String

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

---

##### `interpolationType`<sup>Required</sup> <a name="interpolationType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType"></a>

```java
public java.lang.String getInterpolationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---


### GoogleDiscoveryEngineControlBoostActionOutputReference <a name="GoogleDiscoveryEngineControlBoostActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlBoostActionOutputReference;

new GoogleDiscoveryEngineControlBoostActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec">putInterpolationBoostSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resetFixedBoost">resetFixedBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec">resetInterpolationBoostSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInterpolationBoostSpec` <a name="putInterpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec"></a>

```java
public void putInterpolationBoostSpec(GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---

##### `resetFixedBoost` <a name="resetFixedBoost" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resetFixedBoost"></a>

```java
public void resetFixedBoost()
```

##### `resetInterpolationBoostSpec` <a name="resetInterpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec"></a>

```java
public void resetInterpolationBoostSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec">interpolationBoostSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput">fixedBoostInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput">interpolationBoostSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fixedBoost">fixedBoost</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `interpolationBoostSpec`<sup>Required</sup> <a name="interpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec"></a>

```java
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference getInterpolationBoostSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a>

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput"></a>

```java
public java.lang.String getDataStoreInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `fixedBoostInput`<sup>Optional</sup> <a name="fixedBoostInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput"></a>

```java
public java.lang.Number getFixedBoostInput();
```

- *Type:* java.lang.Number

---

##### `interpolationBoostSpecInput`<sup>Optional</sup> <a name="interpolationBoostSpecInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput"></a>

```java
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec getInterpolationBoostSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `fixedBoost`<sup>Required</sup> <a name="fixedBoost" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fixedBoost"></a>

```java
public java.lang.Number getFixedBoost();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineControlBoostAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a>

---


### GoogleDiscoveryEngineControlConditionsActiveTimeRangeList <a name="GoogleDiscoveryEngineControlConditionsActiveTimeRangeList" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList;

new GoogleDiscoveryEngineControlConditionsActiveTimeRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.get"></a>

```java
public GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDiscoveryEngineControlConditionsActiveTimeRange> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>>

---


### GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference <a name="GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference;

new GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDiscoveryEngineControlConditionsActiveTimeRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>

---


### GoogleDiscoveryEngineControlConditionsList <a name="GoogleDiscoveryEngineControlConditionsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlConditionsList;

new GoogleDiscoveryEngineControlConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.get"></a>

```java
public GoogleDiscoveryEngineControlConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDiscoveryEngineControlConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>>

---


### GoogleDiscoveryEngineControlConditionsOutputReference <a name="GoogleDiscoveryEngineControlConditionsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlConditionsOutputReference;

new GoogleDiscoveryEngineControlConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putActiveTimeRange">putActiveTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putQueryTerms">putQueryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange">resetActiveTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetQueryRegex">resetQueryRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetQueryTerms">resetQueryTerms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveTimeRange` <a name="putActiveTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putActiveTimeRange"></a>

```java
public void putActiveTimeRange(IResolvable|java.util.List<GoogleDiscoveryEngineControlConditionsActiveTimeRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putActiveTimeRange.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>>

---

##### `putQueryTerms` <a name="putQueryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putQueryTerms"></a>

```java
public void putQueryTerms(IResolvable|java.util.List<GoogleDiscoveryEngineControlConditionsQueryTerms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putQueryTerms.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>>

---

##### `resetActiveTimeRange` <a name="resetActiveTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange"></a>

```java
public void resetActiveTimeRange()
```

##### `resetQueryRegex` <a name="resetQueryRegex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetQueryRegex"></a>

```java
public void resetQueryRegex()
```

##### `resetQueryTerms` <a name="resetQueryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetQueryTerms"></a>

```java
public void resetQueryTerms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.activeTimeRange">activeTimeRange</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList">GoogleDiscoveryEngineControlConditionsActiveTimeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryTerms">queryTerms</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList">GoogleDiscoveryEngineControlConditionsQueryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput">activeTimeRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryRegexInput">queryRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryTermsInput">queryTermsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryRegex">queryRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeTimeRange`<sup>Required</sup> <a name="activeTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.activeTimeRange"></a>

```java
public GoogleDiscoveryEngineControlConditionsActiveTimeRangeList getActiveTimeRange();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList">GoogleDiscoveryEngineControlConditionsActiveTimeRangeList</a>

---

##### `queryTerms`<sup>Required</sup> <a name="queryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryTerms"></a>

```java
public GoogleDiscoveryEngineControlConditionsQueryTermsList getQueryTerms();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList">GoogleDiscoveryEngineControlConditionsQueryTermsList</a>

---

##### `activeTimeRangeInput`<sup>Optional</sup> <a name="activeTimeRangeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput"></a>

```java
public IResolvable|java.util.List<GoogleDiscoveryEngineControlConditionsActiveTimeRange> getActiveTimeRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>>

---

##### `queryRegexInput`<sup>Optional</sup> <a name="queryRegexInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryRegexInput"></a>

```java
public java.lang.String getQueryRegexInput();
```

- *Type:* java.lang.String

---

##### `queryTermsInput`<sup>Optional</sup> <a name="queryTermsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryTermsInput"></a>

```java
public IResolvable|java.util.List<GoogleDiscoveryEngineControlConditionsQueryTerms> getQueryTermsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>>

---

##### `queryRegex`<sup>Required</sup> <a name="queryRegex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryRegex"></a>

```java
public java.lang.String getQueryRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDiscoveryEngineControlConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>

---


### GoogleDiscoveryEngineControlConditionsQueryTermsList <a name="GoogleDiscoveryEngineControlConditionsQueryTermsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlConditionsQueryTermsList;

new GoogleDiscoveryEngineControlConditionsQueryTermsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.get"></a>

```java
public GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDiscoveryEngineControlConditionsQueryTerms> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>>

---


### GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference <a name="GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference;

new GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch">resetFullMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFullMatch` <a name="resetFullMatch" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch"></a>

```java
public void resetFullMatch()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput">fullMatchInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch">fullMatch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fullMatchInput`<sup>Optional</sup> <a name="fullMatchInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput"></a>

```java
public java.lang.Boolean|IResolvable getFullMatchInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `fullMatch`<sup>Required</sup> <a name="fullMatch" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch"></a>

```java
public java.lang.Boolean|IResolvable getFullMatch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDiscoveryEngineControlConditionsQueryTerms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>

---


### GoogleDiscoveryEngineControlFilterActionOutputReference <a name="GoogleDiscoveryEngineControlFilterActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlFilterActionOutputReference;

new GoogleDiscoveryEngineControlFilterActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput"></a>

```java
public java.lang.String getDataStoreInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineControlFilterAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a>

---


### GoogleDiscoveryEngineControlPromoteActionOutputReference <a name="GoogleDiscoveryEngineControlPromoteActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlPromoteActionOutputReference;

new GoogleDiscoveryEngineControlPromoteActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion">putSearchLinkPromotion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSearchLinkPromotion` <a name="putSearchLinkPromotion" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion"></a>

```java
public void putSearchLinkPromotion(GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion">searchLinkPromotion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput">searchLinkPromotionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `searchLinkPromotion`<sup>Required</sup> <a name="searchLinkPromotion" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion"></a>

```java
public GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference getSearchLinkPromotion();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a>

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput"></a>

```java
public java.lang.String getDataStoreInput();
```

- *Type:* java.lang.String

---

##### `searchLinkPromotionInput`<sup>Optional</sup> <a name="searchLinkPromotionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput"></a>

```java
public GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion getSearchLinkPromotionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineControlPromoteAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a>

---


### GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference <a name="GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference;

new GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument">resetDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDocument` <a name="resetDocument" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument"></a>

```java
public void resetDocument()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```

##### `resetUri` <a name="resetUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput">documentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document">document</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `documentInput`<sup>Optional</sup> <a name="documentInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput"></a>

```java
public java.lang.String getDocumentInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document"></a>

```java
public java.lang.String getDocument();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---


### GoogleDiscoveryEngineControlRedirectActionOutputReference <a name="GoogleDiscoveryEngineControlRedirectActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlRedirectActionOutputReference;

new GoogleDiscoveryEngineControlRedirectActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput">redirectUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `redirectUriInput`<sup>Optional</sup> <a name="redirectUriInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput"></a>

```java
public java.lang.String getRedirectUriInput();
```

- *Type:* java.lang.String

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineControlRedirectAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a>

---


### GoogleDiscoveryEngineControlSynonymsActionOutputReference <a name="GoogleDiscoveryEngineControlSynonymsActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlSynonymsActionOutputReference;

new GoogleDiscoveryEngineControlSynonymsActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms"></a>

```java
public void resetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput"></a>

```java
public java.util.List<java.lang.String> getSynonymsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineControlSynonymsAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a>

---


### GoogleDiscoveryEngineControlTimeoutsOutputReference <a name="GoogleDiscoveryEngineControlTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_control.GoogleDiscoveryEngineControlTimeoutsOutputReference;

new GoogleDiscoveryEngineControlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDiscoveryEngineControlTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a>

---



