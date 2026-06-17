# `googleOracleDatabaseGoldengateConnectionAssignment` Submodule <a name="`googleOracleDatabaseGoldengateConnectionAssignment` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseGoldengateConnectionAssignment <a name="GoogleOracleDatabaseGoldengateConnectionAssignment" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment google_oracle_database_goldengate_connection_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_connection_assignment.GoogleOracleDatabaseGoldengateConnectionAssignment;

GoogleOracleDatabaseGoldengateConnectionAssignment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .goldengateConnectionAssignmentId(java.lang.String)
    .location(java.lang.String)
    .properties(GoogleOracleDatabaseGoldengateConnectionAssignmentProperties)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.goldengateConnectionAssignmentId">goldengateConnectionAssignmentId</a></code> | <code>java.lang.String</code> | The ID of the GoldengateConnectionAssignment to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties">GoogleOracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#id GoogleOracleDatabaseGoldengateConnectionAssignment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#project GoogleOracleDatabaseGoldengateConnectionAssignment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts">GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `goldengateConnectionAssignmentId`<sup>Required</sup> <a name="goldengateConnectionAssignmentId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.goldengateConnectionAssignmentId"></a>

- *Type:* java.lang.String

The ID of the GoldengateConnectionAssignment to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#goldengate_connection_assignment_id GoogleOracleDatabaseGoldengateConnectionAssignment#goldengate_connection_assignment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#location GoogleOracleDatabaseGoldengateConnectionAssignment#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties">GoogleOracleDatabaseGoldengateConnectionAssignmentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#properties GoogleOracleDatabaseGoldengateConnectionAssignment#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#deletion_policy GoogleOracleDatabaseGoldengateConnectionAssignment#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#deletion_protection GoogleOracleDatabaseGoldengateConnectionAssignment#deletion_protection}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the GoldengateConnectionAssignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#display_name GoogleOracleDatabaseGoldengateConnectionAssignment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#id GoogleOracleDatabaseGoldengateConnectionAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the GoldengateConnectionAssignment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#labels GoogleOracleDatabaseGoldengateConnectionAssignment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#project GoogleOracleDatabaseGoldengateConnectionAssignment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts">GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#timeouts GoogleOracleDatabaseGoldengateConnectionAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.putProperties"></a>

```java
public void putProperties(GoogleOracleDatabaseGoldengateConnectionAssignmentProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties">GoogleOracleDatabaseGoldengateConnectionAssignmentProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.putTimeouts"></a>

```java
public void putTimeouts(GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts">GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseGoldengateConnectionAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_connection_assignment.GoogleOracleDatabaseGoldengateConnectionAssignment;

GoogleOracleDatabaseGoldengateConnectionAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_connection_assignment.GoogleOracleDatabaseGoldengateConnectionAssignment;

GoogleOracleDatabaseGoldengateConnectionAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_connection_assignment.GoogleOracleDatabaseGoldengateConnectionAssignment;

GoogleOracleDatabaseGoldengateConnectionAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_connection_assignment.GoogleOracleDatabaseGoldengateConnectionAssignment;

GoogleOracleDatabaseGoldengateConnectionAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleOracleDatabaseGoldengateConnectionAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleOracleDatabaseGoldengateConnectionAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleOracleDatabaseGoldengateConnectionAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleOracleDatabaseGoldengateConnectionAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseGoldengateConnectionAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference">GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference">GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentIdInput">goldengateConnectionAssignmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties">GoogleOracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts">GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentId">goldengateConnectionAssignmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.properties"></a>

```java
public GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference">GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.timeouts"></a>

```java
public GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference">GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `goldengateConnectionAssignmentIdInput`<sup>Optional</sup> <a name="goldengateConnectionAssignmentIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentIdInput"></a>

```java
public java.lang.String getGoldengateConnectionAssignmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.propertiesInput"></a>

```java
public GoogleOracleDatabaseGoldengateConnectionAssignmentProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties">GoogleOracleDatabaseGoldengateConnectionAssignmentProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts">GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `goldengateConnectionAssignmentId`<sup>Required</sup> <a name="goldengateConnectionAssignmentId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentId"></a>

```java
public java.lang.String getGoldengateConnectionAssignmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseGoldengateConnectionAssignmentConfig <a name="GoogleOracleDatabaseGoldengateConnectionAssignmentConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_connection_assignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig;

GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .goldengateConnectionAssignmentId(java.lang.String)
    .location(java.lang.String)
    .properties(GoogleOracleDatabaseGoldengateConnectionAssignmentProperties)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.goldengateConnectionAssignmentId">goldengateConnectionAssignmentId</a></code> | <code>java.lang.String</code> | The ID of the GoldengateConnectionAssignment to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties">GoogleOracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#id GoogleOracleDatabaseGoldengateConnectionAssignment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#project GoogleOracleDatabaseGoldengateConnectionAssignment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts">GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `goldengateConnectionAssignmentId`<sup>Required</sup> <a name="goldengateConnectionAssignmentId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.goldengateConnectionAssignmentId"></a>

```java
public java.lang.String getGoldengateConnectionAssignmentId();
```

- *Type:* java.lang.String

The ID of the GoldengateConnectionAssignment to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#goldengate_connection_assignment_id GoogleOracleDatabaseGoldengateConnectionAssignment#goldengate_connection_assignment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#location GoogleOracleDatabaseGoldengateConnectionAssignment#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.properties"></a>

```java
public GoogleOracleDatabaseGoldengateConnectionAssignmentProperties getProperties();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties">GoogleOracleDatabaseGoldengateConnectionAssignmentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#properties GoogleOracleDatabaseGoldengateConnectionAssignment#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#deletion_policy GoogleOracleDatabaseGoldengateConnectionAssignment#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#deletion_protection GoogleOracleDatabaseGoldengateConnectionAssignment#deletion_protection}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the GoldengateConnectionAssignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#display_name GoogleOracleDatabaseGoldengateConnectionAssignment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#id GoogleOracleDatabaseGoldengateConnectionAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the GoldengateConnectionAssignment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#labels GoogleOracleDatabaseGoldengateConnectionAssignment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#project GoogleOracleDatabaseGoldengateConnectionAssignment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentConfig.property.timeouts"></a>

```java
public GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts">GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#timeouts GoogleOracleDatabaseGoldengateConnectionAssignment#timeouts}

---

### GoogleOracleDatabaseGoldengateConnectionAssignmentProperties <a name="GoogleOracleDatabaseGoldengateConnectionAssignmentProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_connection_assignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties;

GoogleOracleDatabaseGoldengateConnectionAssignmentProperties.builder()
    .goldengateConnection(java.lang.String)
    .goldengateDeployment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateConnection">goldengateConnection</a></code> | <code>java.lang.String</code> | The GoldengateConnection resource to be assigned. Format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateDeployment">goldengateDeployment</a></code> | <code>java.lang.String</code> | The GoldenGateDeployment to assign the connection to. Format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}. |

---

##### `goldengateConnection`<sup>Required</sup> <a name="goldengateConnection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateConnection"></a>

```java
public java.lang.String getGoldengateConnection();
```

- *Type:* java.lang.String

The GoldengateConnection resource to be assigned. Format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#goldengate_connection GoogleOracleDatabaseGoldengateConnectionAssignment#goldengate_connection}

---

##### `goldengateDeployment`<sup>Required</sup> <a name="goldengateDeployment" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateDeployment"></a>

```java
public java.lang.String getGoldengateDeployment();
```

- *Type:* java.lang.String

The GoldenGateDeployment to assign the connection to. Format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#goldengate_deployment GoogleOracleDatabaseGoldengateConnectionAssignment#goldengate_deployment}

---

### GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts <a name="GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_connection_assignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts;

GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#create GoogleOracleDatabaseGoldengateConnectionAssignment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#delete GoogleOracleDatabaseGoldengateConnectionAssignment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#update GoogleOracleDatabaseGoldengateConnectionAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#create GoogleOracleDatabaseGoldengateConnectionAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#delete GoogleOracleDatabaseGoldengateConnectionAssignment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_goldengate_connection_assignment#update GoogleOracleDatabaseGoldengateConnectionAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference <a name="GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_connection_assignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference;

new GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnectionInput">goldengateConnectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeploymentInput">goldengateDeploymentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnection">goldengateConnection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeployment">goldengateDeployment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties">GoogleOracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `goldengateConnectionInput`<sup>Optional</sup> <a name="goldengateConnectionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnectionInput"></a>

```java
public java.lang.String getGoldengateConnectionInput();
```

- *Type:* java.lang.String

---

##### `goldengateDeploymentInput`<sup>Optional</sup> <a name="goldengateDeploymentInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeploymentInput"></a>

```java
public java.lang.String getGoldengateDeploymentInput();
```

- *Type:* java.lang.String

---

##### `goldengateConnection`<sup>Required</sup> <a name="goldengateConnection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnection"></a>

```java
public java.lang.String getGoldengateConnection();
```

- *Type:* java.lang.String

---

##### `goldengateDeployment`<sup>Required</sup> <a name="goldengateDeployment" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeployment"></a>

```java
public java.lang.String getGoldengateDeployment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseGoldengateConnectionAssignmentProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentProperties">GoogleOracleDatabaseGoldengateConnectionAssignmentProperties</a>

---


### GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference <a name="GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_goldengate_connection_assignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference;

new GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts">GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateConnectionAssignment.GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts">GoogleOracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

---



