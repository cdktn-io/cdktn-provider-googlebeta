# `googleChronicleNativeDashboard` Submodule <a name="`googleChronicleNativeDashboard` Submodule" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleNativeDashboard <a name="GoogleChronicleNativeDashboard" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard google_chronicle_native_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboard;

GoogleChronicleNativeDashboard.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .access(java.lang.String)
//  .charts(IResolvable|java.util.List<GoogleChronicleNativeDashboardCharts>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .filters(IResolvable|java.util.List<GoogleChronicleNativeDashboardFilters>)
//  .id(java.lang.String)
//  .isPinned(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .timeouts(GoogleChronicleNativeDashboardTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name/title of the dashboard visible to users. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The ID of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.access">access</a></code> | <code>java.lang.String</code> | The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.charts">charts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>></code> | charts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the dashboard. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.filters">filters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>></code> | filters block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.isPinned">isPinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the dashboard is pinned by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#project GoogleChronicleNativeDashboard#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name/title of the dashboard visible to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#display_name GoogleChronicleNativeDashboard#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The ID of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#instance GoogleChronicleNativeDashboard#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#location GoogleChronicleNativeDashboard#location}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.access"></a>

- *Type:* java.lang.String

The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#access GoogleChronicleNativeDashboard#access}

---

##### `charts`<sup>Optional</sup> <a name="charts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.charts"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>>

charts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#charts GoogleChronicleNativeDashboard#charts}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#deletion_policy GoogleChronicleNativeDashboard#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#description GoogleChronicleNativeDashboard#description}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.filters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#filters GoogleChronicleNativeDashboard#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPinned`<sup>Optional</sup> <a name="isPinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.isPinned"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the dashboard is pinned by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#is_pinned GoogleChronicleNativeDashboard#is_pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#project GoogleChronicleNativeDashboard#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#timeouts GoogleChronicleNativeDashboard#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#type GoogleChronicleNativeDashboard#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putCharts">putCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetCharts">resetCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetIsPinned">resetIsPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCharts` <a name="putCharts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putCharts"></a>

```java
public void putCharts(IResolvable|java.util.List<GoogleChronicleNativeDashboardCharts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putCharts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>>

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putFilters"></a>

```java
public void putFilters(IResolvable|java.util.List<GoogleChronicleNativeDashboardFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts"></a>

```java
public void putTimeouts(GoogleChronicleNativeDashboardTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

---

##### `resetAccess` <a name="resetAccess" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetAccess"></a>

```java
public void resetAccess()
```

##### `resetCharts` <a name="resetCharts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetCharts"></a>

```java
public void resetCharts()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetId"></a>

```java
public void resetId()
```

##### `resetIsPinned` <a name="resetIsPinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetIsPinned"></a>

```java
public void resetIsPinned()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleNativeDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboard;

GoogleChronicleNativeDashboard.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboard;

GoogleChronicleNativeDashboard.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboard;

GoogleChronicleNativeDashboard.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboard;

GoogleChronicleNativeDashboard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleChronicleNativeDashboard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleChronicleNativeDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleChronicleNativeDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleChronicleNativeDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleNativeDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.charts">charts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList">GoogleChronicleNativeDashboardChartsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createUserId">createUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList">GoogleChronicleNativeDashboardFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lastViewedTime">lastViewedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference">GoogleChronicleNativeDashboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateUserId">updateUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.accessInput">accessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.chartsInput">chartsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filtersInput">filtersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinnedInput">isPinnedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.access">access</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinned">isPinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `charts`<sup>Required</sup> <a name="charts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.charts"></a>

```java
public GoogleChronicleNativeDashboardChartsList getCharts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList">GoogleChronicleNativeDashboardChartsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `createUserId`<sup>Required</sup> <a name="createUserId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createUserId"></a>

```java
public java.lang.String getCreateUserId();
```

- *Type:* java.lang.String

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filters"></a>

```java
public GoogleChronicleNativeDashboardFiltersList getFilters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList">GoogleChronicleNativeDashboardFiltersList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `lastViewedTime`<sup>Required</sup> <a name="lastViewedTime" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lastViewedTime"></a>

```java
public java.lang.String getLastViewedTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeouts"></a>

```java
public GoogleChronicleNativeDashboardTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference">GoogleChronicleNativeDashboardTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `updateUserId`<sup>Required</sup> <a name="updateUserId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateUserId"></a>

```java
public java.lang.String getUpdateUserId();
```

- *Type:* java.lang.String

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.accessInput"></a>

```java
public java.lang.String getAccessInput();
```

- *Type:* java.lang.String

---

##### `chartsInput`<sup>Optional</sup> <a name="chartsInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.chartsInput"></a>

```java
public IResolvable|java.util.List<GoogleChronicleNativeDashboardCharts> getChartsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filtersInput"></a>

```java
public IResolvable|java.util.List<GoogleChronicleNativeDashboardFilters> getFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `isPinnedInput`<sup>Optional</sup> <a name="isPinnedInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinnedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsPinnedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeoutsInput"></a>

```java
public IResolvable|GoogleChronicleNativeDashboardTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `isPinned`<sup>Required</sup> <a name="isPinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinned"></a>

```java
public java.lang.Boolean|IResolvable getIsPinned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleNativeDashboardCharts <a name="GoogleChronicleNativeDashboardCharts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardCharts;

GoogleChronicleNativeDashboardCharts.builder()
//  .chartLayout(GoogleChronicleNativeDashboardChartsChartLayout)
//  .dashboardChart(java.lang.String)
//  .filtersIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.chartLayout">chartLayout</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a></code> | chart_layout block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.dashboardChart">dashboardChart</a></code> | <code>java.lang.String</code> | The resource name of the associated DashboardChart. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.filtersIds">filtersIds</a></code> | <code>java.util.List<java.lang.String></code> | List of dashboard filter IDs applied to this chart. |

---

##### `chartLayout`<sup>Optional</sup> <a name="chartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.chartLayout"></a>

```java
public GoogleChronicleNativeDashboardChartsChartLayout getChartLayout();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

chart_layout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#chart_layout GoogleChronicleNativeDashboard#chart_layout}

---

##### `dashboardChart`<sup>Optional</sup> <a name="dashboardChart" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.dashboardChart"></a>

```java
public java.lang.String getDashboardChart();
```

- *Type:* java.lang.String

The resource name of the associated DashboardChart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#dashboard_chart GoogleChronicleNativeDashboard#dashboard_chart}

---

##### `filtersIds`<sup>Optional</sup> <a name="filtersIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.filtersIds"></a>

```java
public java.util.List<java.lang.String> getFiltersIds();
```

- *Type:* java.util.List<java.lang.String>

List of dashboard filter IDs applied to this chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#filters_ids GoogleChronicleNativeDashboard#filters_ids}

---

### GoogleChronicleNativeDashboardChartsChartLayout <a name="GoogleChronicleNativeDashboardChartsChartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardChartsChartLayout;

GoogleChronicleNativeDashboardChartsChartLayout.builder()
    .spanX(java.lang.Number)
    .spanY(java.lang.Number)
//  .startX(java.lang.Number)
//  .startY(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanX">spanX</a></code> | <code>java.lang.Number</code> | The number of columns the chart spans. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanY">spanY</a></code> | <code>java.lang.Number</code> | The number of rows the chart spans. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startX">startX</a></code> | <code>java.lang.Number</code> | The starting X coordinate. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startY">startY</a></code> | <code>java.lang.Number</code> | The starting Y coordinate. |

---

##### `spanX`<sup>Required</sup> <a name="spanX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanX"></a>

```java
public java.lang.Number getSpanX();
```

- *Type:* java.lang.Number

The number of columns the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#span_x GoogleChronicleNativeDashboard#span_x}

---

##### `spanY`<sup>Required</sup> <a name="spanY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanY"></a>

```java
public java.lang.Number getSpanY();
```

- *Type:* java.lang.Number

The number of rows the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#span_y GoogleChronicleNativeDashboard#span_y}

---

##### `startX`<sup>Optional</sup> <a name="startX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startX"></a>

```java
public java.lang.Number getStartX();
```

- *Type:* java.lang.Number

The starting X coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#start_x GoogleChronicleNativeDashboard#start_x}

---

##### `startY`<sup>Optional</sup> <a name="startY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startY"></a>

```java
public java.lang.Number getStartY();
```

- *Type:* java.lang.Number

The starting Y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#start_y GoogleChronicleNativeDashboard#start_y}

---

### GoogleChronicleNativeDashboardConfig <a name="GoogleChronicleNativeDashboardConfig" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardConfig;

GoogleChronicleNativeDashboardConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .access(java.lang.String)
//  .charts(IResolvable|java.util.List<GoogleChronicleNativeDashboardCharts>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .filters(IResolvable|java.util.List<GoogleChronicleNativeDashboardFilters>)
//  .id(java.lang.String)
//  .isPinned(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .timeouts(GoogleChronicleNativeDashboardTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name/title of the dashboard visible to users. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The ID of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.access">access</a></code> | <code>java.lang.String</code> | The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.charts">charts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>></code> | charts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the dashboard. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.filters">filters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>></code> | filters block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.isPinned">isPinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the dashboard is pinned by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#project GoogleChronicleNativeDashboard#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name/title of the dashboard visible to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#display_name GoogleChronicleNativeDashboard#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The ID of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#instance GoogleChronicleNativeDashboard#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#location GoogleChronicleNativeDashboard#location}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#access GoogleChronicleNativeDashboard#access}

---

##### `charts`<sup>Optional</sup> <a name="charts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.charts"></a>

```java
public IResolvable|java.util.List<GoogleChronicleNativeDashboardCharts> getCharts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>>

charts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#charts GoogleChronicleNativeDashboard#charts}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#deletion_policy GoogleChronicleNativeDashboard#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#description GoogleChronicleNativeDashboard#description}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.filters"></a>

```java
public IResolvable|java.util.List<GoogleChronicleNativeDashboardFilters> getFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#filters GoogleChronicleNativeDashboard#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPinned`<sup>Optional</sup> <a name="isPinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.isPinned"></a>

```java
public java.lang.Boolean|IResolvable getIsPinned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the dashboard is pinned by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#is_pinned GoogleChronicleNativeDashboard#is_pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#project GoogleChronicleNativeDashboard#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.timeouts"></a>

```java
public GoogleChronicleNativeDashboardTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#timeouts GoogleChronicleNativeDashboard#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#type GoogleChronicleNativeDashboard#type}

---

### GoogleChronicleNativeDashboardFilters <a name="GoogleChronicleNativeDashboardFilters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardFilters;

GoogleChronicleNativeDashboardFilters.builder()
//  .chartIds(java.util.List<java.lang.String>)
//  .dataSource(java.lang.String)
//  .displayName(java.lang.String)
//  .fieldPath(java.lang.String)
//  .filterOperatorAndFieldValues(IResolvable|java.util.List<GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues>)
//  .id(java.lang.String)
//  .isMandatory(java.lang.Boolean|IResolvable)
//  .isStandardTimeRangeFilter(java.lang.Boolean|IResolvable)
//  .isStandardTimeRangeFilterEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.chartIds">chartIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of charts that this filter applies to. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the filter. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | The UDM field path being filtered. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues">filterOperatorAndFieldValues</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>></code> | filter_operator_and_field_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.id">id</a></code> | <code>java.lang.String</code> | The unique ID of the filter. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isMandatory">isMandatory</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the filter is mandatory for the dashboard consumer. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter">isStandardTimeRangeFilter</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the filter is a standard time range filter. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled">isStandardTimeRangeFilterEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the standard time range filter is currently enabled. |

---

##### `chartIds`<sup>Optional</sup> <a name="chartIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.chartIds"></a>

```java
public java.util.List<java.lang.String> getChartIds();
```

- *Type:* java.util.List<java.lang.String>

The IDs of charts that this filter applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#chart_ids GoogleChronicleNativeDashboard#chart_ids}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#data_source GoogleChronicleNativeDashboard#data_source}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#display_name GoogleChronicleNativeDashboard#display_name}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

The UDM field path being filtered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#field_path GoogleChronicleNativeDashboard#field_path}

---

##### `filterOperatorAndFieldValues`<sup>Optional</sup> <a name="filterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues"></a>

```java
public IResolvable|java.util.List<GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues> getFilterOperatorAndFieldValues();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>>

filter_operator_and_field_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#filter_operator_and_field_values GoogleChronicleNativeDashboard#filter_operator_and_field_values}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique ID of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isMandatory`<sup>Optional</sup> <a name="isMandatory" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isMandatory"></a>

```java
public java.lang.Boolean|IResolvable getIsMandatory();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the filter is mandatory for the dashboard consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#is_mandatory GoogleChronicleNativeDashboard#is_mandatory}

---

##### `isStandardTimeRangeFilter`<sup>Optional</sup> <a name="isStandardTimeRangeFilter" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter"></a>

```java
public java.lang.Boolean|IResolvable getIsStandardTimeRangeFilter();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the filter is a standard time range filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#is_standard_time_range_filter GoogleChronicleNativeDashboard#is_standard_time_range_filter}

---

##### `isStandardTimeRangeFilterEnabled`<sup>Optional</sup> <a name="isStandardTimeRangeFilterEnabled" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsStandardTimeRangeFilterEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the standard time range filter is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#is_standard_time_range_filter_enabled GoogleChronicleNativeDashboard#is_standard_time_range_filter_enabled}

---

### GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues <a name="GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues;

GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.builder()
//  .fieldValues(java.util.List<java.lang.String>)
//  .filterOperator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues">fieldValues</a></code> | <code>java.util.List<java.lang.String></code> | The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator">filterOperator</a></code> | <code>java.lang.String</code> | The operator to apply to the field. |

---

##### `fieldValues`<sup>Optional</sup> <a name="fieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues"></a>

```java
public java.util.List<java.lang.String> getFieldValues();
```

- *Type:* java.util.List<java.lang.String>

The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#field_values GoogleChronicleNativeDashboard#field_values}

---

##### `filterOperator`<sup>Optional</sup> <a name="filterOperator" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator"></a>

```java
public java.lang.String getFilterOperator();
```

- *Type:* java.lang.String

The operator to apply to the field.

Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#filter_operator GoogleChronicleNativeDashboard#filter_operator}

---

### GoogleChronicleNativeDashboardTimeouts <a name="GoogleChronicleNativeDashboardTimeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardTimeouts;

GoogleChronicleNativeDashboardTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#create GoogleChronicleNativeDashboard#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#delete GoogleChronicleNativeDashboard#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#update GoogleChronicleNativeDashboard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#create GoogleChronicleNativeDashboard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#delete GoogleChronicleNativeDashboard#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_native_dashboard#update GoogleChronicleNativeDashboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleNativeDashboardChartsChartLayoutOutputReference <a name="GoogleChronicleNativeDashboardChartsChartLayoutOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference;

new GoogleChronicleNativeDashboardChartsChartLayoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX">resetStartX</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY">resetStartY</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartX` <a name="resetStartX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX"></a>

```java
public void resetStartX()
```

##### `resetStartY` <a name="resetStartY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY"></a>

```java
public void resetStartY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput">spanXInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput">spanYInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput">startXInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput">startYInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX">spanX</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY">spanY</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX">startX</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY">startY</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spanXInput`<sup>Optional</sup> <a name="spanXInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput"></a>

```java
public java.lang.Number getSpanXInput();
```

- *Type:* java.lang.Number

---

##### `spanYInput`<sup>Optional</sup> <a name="spanYInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput"></a>

```java
public java.lang.Number getSpanYInput();
```

- *Type:* java.lang.Number

---

##### `startXInput`<sup>Optional</sup> <a name="startXInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput"></a>

```java
public java.lang.Number getStartXInput();
```

- *Type:* java.lang.Number

---

##### `startYInput`<sup>Optional</sup> <a name="startYInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput"></a>

```java
public java.lang.Number getStartYInput();
```

- *Type:* java.lang.Number

---

##### `spanX`<sup>Required</sup> <a name="spanX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX"></a>

```java
public java.lang.Number getSpanX();
```

- *Type:* java.lang.Number

---

##### `spanY`<sup>Required</sup> <a name="spanY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY"></a>

```java
public java.lang.Number getSpanY();
```

- *Type:* java.lang.Number

---

##### `startX`<sup>Required</sup> <a name="startX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX"></a>

```java
public java.lang.Number getStartX();
```

- *Type:* java.lang.Number

---

##### `startY`<sup>Required</sup> <a name="startY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY"></a>

```java
public java.lang.Number getStartY();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue"></a>

```java
public GoogleChronicleNativeDashboardChartsChartLayout getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

---


### GoogleChronicleNativeDashboardChartsList <a name="GoogleChronicleNativeDashboardChartsList" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardChartsList;

new GoogleChronicleNativeDashboardChartsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.get"></a>

```java
public GoogleChronicleNativeDashboardChartsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleChronicleNativeDashboardCharts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>>

---


### GoogleChronicleNativeDashboardChartsOutputReference <a name="GoogleChronicleNativeDashboardChartsOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardChartsOutputReference;

new GoogleChronicleNativeDashboardChartsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout">putChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetChartLayout">resetChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetDashboardChart">resetDashboardChart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetFiltersIds">resetFiltersIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChartLayout` <a name="putChartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout"></a>

```java
public void putChartLayout(GoogleChronicleNativeDashboardChartsChartLayout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

---

##### `resetChartLayout` <a name="resetChartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetChartLayout"></a>

```java
public void resetChartLayout()
```

##### `resetDashboardChart` <a name="resetDashboardChart" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetDashboardChart"></a>

```java
public void resetDashboardChart()
```

##### `resetFiltersIds` <a name="resetFiltersIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetFiltersIds"></a>

```java
public void resetFiltersIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayout">chartLayout</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference">GoogleChronicleNativeDashboardChartsChartLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput">chartLayoutInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput">dashboardChartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput">filtersIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChart">dashboardChart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIds">filtersIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chartLayout`<sup>Required</sup> <a name="chartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayout"></a>

```java
public GoogleChronicleNativeDashboardChartsChartLayoutOutputReference getChartLayout();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference">GoogleChronicleNativeDashboardChartsChartLayoutOutputReference</a>

---

##### `chartLayoutInput`<sup>Optional</sup> <a name="chartLayoutInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput"></a>

```java
public GoogleChronicleNativeDashboardChartsChartLayout getChartLayoutInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

---

##### `dashboardChartInput`<sup>Optional</sup> <a name="dashboardChartInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput"></a>

```java
public java.lang.String getDashboardChartInput();
```

- *Type:* java.lang.String

---

##### `filtersIdsInput`<sup>Optional</sup> <a name="filtersIdsInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput"></a>

```java
public java.util.List<java.lang.String> getFiltersIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dashboardChart`<sup>Required</sup> <a name="dashboardChart" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChart"></a>

```java
public java.lang.String getDashboardChart();
```

- *Type:* java.lang.String

---

##### `filtersIds`<sup>Required</sup> <a name="filtersIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIds"></a>

```java
public java.util.List<java.lang.String> getFiltersIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleChronicleNativeDashboardCharts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>

---


### GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList <a name="GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList;

new GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get"></a>

```java
public GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>>

---


### GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference <a name="GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference;

new GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues">resetFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator">resetFilterOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldValues` <a name="resetFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues"></a>

```java
public void resetFieldValues()
```

##### `resetFilterOperator` <a name="resetFilterOperator" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator"></a>

```java
public void resetFilterOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput">fieldValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput">filterOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues">fieldValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator">filterOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldValuesInput`<sup>Optional</sup> <a name="fieldValuesInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput"></a>

```java
public java.util.List<java.lang.String> getFieldValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterOperatorInput`<sup>Optional</sup> <a name="filterOperatorInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput"></a>

```java
public java.lang.String getFilterOperatorInput();
```

- *Type:* java.lang.String

---

##### `fieldValues`<sup>Required</sup> <a name="fieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues"></a>

```java
public java.util.List<java.lang.String> getFieldValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterOperator`<sup>Required</sup> <a name="filterOperator" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator"></a>

```java
public java.lang.String getFilterOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>

---


### GoogleChronicleNativeDashboardFiltersList <a name="GoogleChronicleNativeDashboardFiltersList" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardFiltersList;

new GoogleChronicleNativeDashboardFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.get"></a>

```java
public GoogleChronicleNativeDashboardFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleChronicleNativeDashboardFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>>

---


### GoogleChronicleNativeDashboardFiltersOutputReference <a name="GoogleChronicleNativeDashboardFiltersOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardFiltersOutputReference;

new GoogleChronicleNativeDashboardFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues">putFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetChartIds">resetChartIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues">resetFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsMandatory">resetIsMandatory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter">resetIsStandardTimeRangeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled">resetIsStandardTimeRangeFilterEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterOperatorAndFieldValues` <a name="putFilterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues"></a>

```java
public void putFilterOperatorAndFieldValues(IResolvable|java.util.List<GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>>

---

##### `resetChartIds` <a name="resetChartIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetChartIds"></a>

```java
public void resetChartIds()
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDataSource"></a>

```java
public void resetDataSource()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFieldPath"></a>

```java
public void resetFieldPath()
```

##### `resetFilterOperatorAndFieldValues` <a name="resetFilterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues"></a>

```java
public void resetFilterOperatorAndFieldValues()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIsMandatory` <a name="resetIsMandatory" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsMandatory"></a>

```java
public void resetIsMandatory()
```

##### `resetIsStandardTimeRangeFilter` <a name="resetIsStandardTimeRangeFilter" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter"></a>

```java
public void resetIsStandardTimeRangeFilter()
```

##### `resetIsStandardTimeRangeFilterEnabled` <a name="resetIsStandardTimeRangeFilterEnabled" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled"></a>

```java
public void resetIsStandardTimeRangeFilterEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues">filterOperatorAndFieldValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput">chartIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput">filterOperatorAndFieldValuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput">isMandatoryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput">isStandardTimeRangeFilterEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput">isStandardTimeRangeFilterInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIds">chartIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatory">isMandatory</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter">isStandardTimeRangeFilter</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled">isStandardTimeRangeFilterEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterOperatorAndFieldValues`<sup>Required</sup> <a name="filterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues"></a>

```java
public GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList getFilterOperatorAndFieldValues();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a>

---

##### `chartIdsInput`<sup>Optional</sup> <a name="chartIdsInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput"></a>

```java
public java.util.List<java.lang.String> getChartIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput"></a>

```java
public java.lang.String getDataSourceInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput"></a>

```java
public java.lang.String getFieldPathInput();
```

- *Type:* java.lang.String

---

##### `filterOperatorAndFieldValuesInput`<sup>Optional</sup> <a name="filterOperatorAndFieldValuesInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput"></a>

```java
public IResolvable|java.util.List<GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues> getFilterOperatorAndFieldValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isMandatoryInput`<sup>Optional</sup> <a name="isMandatoryInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput"></a>

```java
public java.lang.Boolean|IResolvable getIsMandatoryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isStandardTimeRangeFilterEnabledInput`<sup>Optional</sup> <a name="isStandardTimeRangeFilterEnabledInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsStandardTimeRangeFilterEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isStandardTimeRangeFilterInput`<sup>Optional</sup> <a name="isStandardTimeRangeFilterInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput"></a>

```java
public java.lang.Boolean|IResolvable getIsStandardTimeRangeFilterInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `chartIds`<sup>Required</sup> <a name="chartIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIds"></a>

```java
public java.util.List<java.lang.String> getChartIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isMandatory`<sup>Required</sup> <a name="isMandatory" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatory"></a>

```java
public java.lang.Boolean|IResolvable getIsMandatory();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isStandardTimeRangeFilter`<sup>Required</sup> <a name="isStandardTimeRangeFilter" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter"></a>

```java
public java.lang.Boolean|IResolvable getIsStandardTimeRangeFilter();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isStandardTimeRangeFilterEnabled`<sup>Required</sup> <a name="isStandardTimeRangeFilterEnabled" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsStandardTimeRangeFilterEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleChronicleNativeDashboardFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>

---


### GoogleChronicleNativeDashboardTimeoutsOutputReference <a name="GoogleChronicleNativeDashboardTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_native_dashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference;

new GoogleChronicleNativeDashboardTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleChronicleNativeDashboardTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

---



