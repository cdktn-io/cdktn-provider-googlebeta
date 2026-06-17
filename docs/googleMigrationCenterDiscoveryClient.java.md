# `googleMigrationCenterDiscoveryClient` Submodule <a name="`googleMigrationCenterDiscoveryClient` Submodule" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterDiscoveryClient <a name="GoogleMigrationCenterDiscoveryClient" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client google_migration_center_discovery_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClient;

GoogleMigrationCenterDiscoveryClient.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .discoveryClientId(java.lang.String)
    .location(java.lang.String)
    .serviceAccount(java.lang.String)
    .source(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .expireTime(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleMigrationCenterDiscoveryClientTimeouts)
//  .ttl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.discoveryClientId">discoveryClientId</a></code> | <code>java.lang.String</code> | User specified ID for the discovery client. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Service account used by the discovery client for various operation. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Full name of the source object associated with this discovery client. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Free text description. Maximum length is 1000 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Free text display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.expireTime">expireTime</a></code> | <code>java.lang.String</code> | Client expiration time in UTC. If specified, the backend will not accept new frames after this time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#id GoogleMigrationCenterDiscoveryClient#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#project GoogleMigrationCenterDiscoveryClient#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Input only. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `discoveryClientId`<sup>Required</sup> <a name="discoveryClientId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.discoveryClientId"></a>

- *Type:* java.lang.String

User specified ID for the discovery client.

It will become the last
component of the discovery client name. The ID must be unique within the
project, is restricted to lower-cased letters and has a maximum length of
63 characters. The ID must match the regular expression:
'[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#discovery_client_id GoogleMigrationCenterDiscoveryClient#discovery_client_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#location GoogleMigrationCenterDiscoveryClient#location}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

Service account used by the discovery client for various operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#service_account GoogleMigrationCenterDiscoveryClient#service_account}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Full name of the source object associated with this discovery client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#source GoogleMigrationCenterDiscoveryClient#source}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#deletion_policy GoogleMigrationCenterDiscoveryClient#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Free text description. Maximum length is 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#description GoogleMigrationCenterDiscoveryClient#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Free text display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#display_name GoogleMigrationCenterDiscoveryClient#display_name}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.expireTime"></a>

- *Type:* java.lang.String

Client expiration time in UTC. If specified, the backend will not accept new frames after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#expire_time GoogleMigrationCenterDiscoveryClient#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#id GoogleMigrationCenterDiscoveryClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#labels GoogleMigrationCenterDiscoveryClient#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#project GoogleMigrationCenterDiscoveryClient#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#timeouts GoogleMigrationCenterDiscoveryClient#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Input only.

Client time-to-live. If specified, the backend will not accept new
frames after this time.
This field is input only. The derived expiration time is provided as
output through the 'expire_time' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#ttl GoogleMigrationCenterDiscoveryClient#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.putTimeouts"></a>

```java
public void putTimeouts(GoogleMigrationCenterDiscoveryClientTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetExpireTime"></a>

```java
public void resetExpireTime()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleMigrationCenterDiscoveryClient resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClient;

GoogleMigrationCenterDiscoveryClient.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClient;

GoogleMigrationCenterDiscoveryClient.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClient;

GoogleMigrationCenterDiscoveryClient.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClient;

GoogleMigrationCenterDiscoveryClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleMigrationCenterDiscoveryClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleMigrationCenterDiscoveryClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleMigrationCenterDiscoveryClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleMigrationCenterDiscoveryClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterDiscoveryClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList">GoogleMigrationCenterDiscoveryClientErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.heartbeatTime">heartbeatTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.signalsEndpoint">signalsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference">GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.discoveryClientIdInput">discoveryClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.expireTimeInput">expireTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.discoveryClientId">discoveryClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.errors"></a>

```java
public GoogleMigrationCenterDiscoveryClientErrorsList getErrors();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList">GoogleMigrationCenterDiscoveryClientErrorsList</a>

---

##### `heartbeatTime`<sup>Required</sup> <a name="heartbeatTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.heartbeatTime"></a>

```java
public java.lang.String getHeartbeatTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signalsEndpoint`<sup>Required</sup> <a name="signalsEndpoint" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.signalsEndpoint"></a>

```java
public java.lang.String getSignalsEndpoint();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.timeouts"></a>

```java
public GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference">GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `discoveryClientIdInput`<sup>Optional</sup> <a name="discoveryClientIdInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.discoveryClientIdInput"></a>

```java
public java.lang.String getDiscoveryClientIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.expireTimeInput"></a>

```java
public java.lang.String getExpireTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.timeoutsInput"></a>

```java
public IResolvable|GoogleMigrationCenterDiscoveryClientTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `discoveryClientId`<sup>Required</sup> <a name="discoveryClientId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.discoveryClientId"></a>

```java
public java.lang.String getDiscoveryClientId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterDiscoveryClientConfig <a name="GoogleMigrationCenterDiscoveryClientConfig" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClientConfig;

GoogleMigrationCenterDiscoveryClientConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .discoveryClientId(java.lang.String)
    .location(java.lang.String)
    .serviceAccount(java.lang.String)
    .source(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .expireTime(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleMigrationCenterDiscoveryClientTimeouts)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.discoveryClientId">discoveryClientId</a></code> | <code>java.lang.String</code> | User specified ID for the discovery client. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Service account used by the discovery client for various operation. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.source">source</a></code> | <code>java.lang.String</code> | Full name of the source object associated with this discovery client. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.description">description</a></code> | <code>java.lang.String</code> | Free text description. Maximum length is 1000 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Free text display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | Client expiration time in UTC. If specified, the backend will not accept new frames after this time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#id GoogleMigrationCenterDiscoveryClient#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#project GoogleMigrationCenterDiscoveryClient#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Input only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `discoveryClientId`<sup>Required</sup> <a name="discoveryClientId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.discoveryClientId"></a>

```java
public java.lang.String getDiscoveryClientId();
```

- *Type:* java.lang.String

User specified ID for the discovery client.

It will become the last
component of the discovery client name. The ID must be unique within the
project, is restricted to lower-cased letters and has a maximum length of
63 characters. The ID must match the regular expression:
'[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#discovery_client_id GoogleMigrationCenterDiscoveryClient#discovery_client_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#location GoogleMigrationCenterDiscoveryClient#location}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Service account used by the discovery client for various operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#service_account GoogleMigrationCenterDiscoveryClient#service_account}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Full name of the source object associated with this discovery client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#source GoogleMigrationCenterDiscoveryClient#source}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#deletion_policy GoogleMigrationCenterDiscoveryClient#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Free text description. Maximum length is 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#description GoogleMigrationCenterDiscoveryClient#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Free text display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#display_name GoogleMigrationCenterDiscoveryClient#display_name}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

Client expiration time in UTC. If specified, the backend will not accept new frames after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#expire_time GoogleMigrationCenterDiscoveryClient#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#id GoogleMigrationCenterDiscoveryClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#labels GoogleMigrationCenterDiscoveryClient#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#project GoogleMigrationCenterDiscoveryClient#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.timeouts"></a>

```java
public GoogleMigrationCenterDiscoveryClientTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#timeouts GoogleMigrationCenterDiscoveryClient#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Input only.

Client time-to-live. If specified, the backend will not accept new
frames after this time.
This field is input only. The derived expiration time is provided as
output through the 'expire_time' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#ttl GoogleMigrationCenterDiscoveryClient#ttl}

---

### GoogleMigrationCenterDiscoveryClientErrors <a name="GoogleMigrationCenterDiscoveryClientErrors" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrors.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClientErrors;

GoogleMigrationCenterDiscoveryClientErrors.builder()
    .build();
```


### GoogleMigrationCenterDiscoveryClientErrorsDetails <a name="GoogleMigrationCenterDiscoveryClientErrorsDetails" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetails.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClientErrorsDetails;

GoogleMigrationCenterDiscoveryClientErrorsDetails.builder()
    .build();
```


### GoogleMigrationCenterDiscoveryClientTimeouts <a name="GoogleMigrationCenterDiscoveryClientTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClientTimeouts;

GoogleMigrationCenterDiscoveryClientTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#create GoogleMigrationCenterDiscoveryClient#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#delete GoogleMigrationCenterDiscoveryClient#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#update GoogleMigrationCenterDiscoveryClient#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#create GoogleMigrationCenterDiscoveryClient#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#delete GoogleMigrationCenterDiscoveryClient#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#update GoogleMigrationCenterDiscoveryClient#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterDiscoveryClientErrorsDetailsList <a name="GoogleMigrationCenterDiscoveryClientErrorsDetailsList" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClientErrorsDetailsList;

new GoogleMigrationCenterDiscoveryClientErrorsDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.get"></a>

```java
public GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference <a name="GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference;

new GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetails">GoogleMigrationCenterDiscoveryClientErrorsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterDiscoveryClientErrorsDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetails">GoogleMigrationCenterDiscoveryClientErrorsDetails</a>

---


### GoogleMigrationCenterDiscoveryClientErrorsList <a name="GoogleMigrationCenterDiscoveryClientErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClientErrorsList;

new GoogleMigrationCenterDiscoveryClientErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.get"></a>

```java
public GoogleMigrationCenterDiscoveryClientErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterDiscoveryClientErrorsOutputReference <a name="GoogleMigrationCenterDiscoveryClientErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClientErrorsOutputReference;

new GoogleMigrationCenterDiscoveryClientErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.details">details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList">GoogleMigrationCenterDiscoveryClientErrorsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrors">GoogleMigrationCenterDiscoveryClientErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.details"></a>

```java
public GoogleMigrationCenterDiscoveryClientErrorsDetailsList getDetails();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList">GoogleMigrationCenterDiscoveryClientErrorsDetailsList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterDiscoveryClientErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrors">GoogleMigrationCenterDiscoveryClientErrors</a>

---


### GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference <a name="GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_discovery_client.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference;

new GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleMigrationCenterDiscoveryClientTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a>

---



