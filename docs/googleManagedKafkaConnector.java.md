# `googleManagedKafkaConnector` Submodule <a name="`googleManagedKafkaConnector` Submodule" id="@cdktn/provider-google-beta.googleManagedKafkaConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleManagedKafkaConnector <a name="GoogleManagedKafkaConnector" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector google_managed_kafka_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_connector.GoogleManagedKafkaConnector;

GoogleManagedKafkaConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectCluster(java.lang.String)
    .connectorId(java.lang.String)
    .location(java.lang.String)
//  .configs(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .taskRestartPolicy(GoogleManagedKafkaConnectorTaskRestartPolicy)
//  .timeouts(GoogleManagedKafkaConnectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.connectCluster">connectCluster</a></code> | <code>java.lang.String</code> | The connect cluster name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.connectorId">connectorId</a></code> | <code>java.lang.String</code> | The ID to use for the connector, which will become the final component of the connector's name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.configs">configs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#id GoogleManagedKafkaConnector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#project GoogleManagedKafkaConnector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.taskRestartPolicy">taskRestartPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a></code> | task_restart_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectCluster`<sup>Required</sup> <a name="connectCluster" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.connectCluster"></a>

- *Type:* java.lang.String

The connect cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#connect_cluster GoogleManagedKafkaConnector#connect_cluster}

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.connectorId"></a>

- *Type:* java.lang.String

The ID to use for the connector, which will become the final component of the connector's name.

This value is structured like: 'my-connector-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#connector_id GoogleManagedKafkaConnector#connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.location"></a>

- *Type:* java.lang.String

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#location GoogleManagedKafkaConnector#location}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.configs"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#configs GoogleManagedKafkaConnector#configs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#deletion_policy GoogleManagedKafkaConnector#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#id GoogleManagedKafkaConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#project GoogleManagedKafkaConnector#project}.

---

##### `taskRestartPolicy`<sup>Optional</sup> <a name="taskRestartPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.taskRestartPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a>

task_restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#task_restart_policy GoogleManagedKafkaConnector#task_restart_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#timeouts GoogleManagedKafkaConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.putTaskRestartPolicy">putTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetConfigs">resetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetTaskRestartPolicy">resetTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTaskRestartPolicy` <a name="putTaskRestartPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.putTaskRestartPolicy"></a>

```java
public void putTaskRestartPolicy(GoogleManagedKafkaConnectorTaskRestartPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.putTaskRestartPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.putTimeouts"></a>

```java
public void putTimeouts(GoogleManagedKafkaConnectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a>

---

##### `resetConfigs` <a name="resetConfigs" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetConfigs"></a>

```java
public void resetConfigs()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetProject"></a>

```java
public void resetProject()
```

##### `resetTaskRestartPolicy` <a name="resetTaskRestartPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetTaskRestartPolicy"></a>

```java
public void resetTaskRestartPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleManagedKafkaConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_connector.GoogleManagedKafkaConnector;

GoogleManagedKafkaConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_connector.GoogleManagedKafkaConnector;

GoogleManagedKafkaConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_connector.GoogleManagedKafkaConnector;

GoogleManagedKafkaConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_connector.GoogleManagedKafkaConnector;

GoogleManagedKafkaConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleManagedKafkaConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleManagedKafkaConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleManagedKafkaConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleManagedKafkaConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleManagedKafkaConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.taskRestartPolicy">taskRestartPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference">GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference">GoogleManagedKafkaConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.configsInput">configsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectClusterInput">connectClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectorIdInput">connectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.taskRestartPolicyInput">taskRestartPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.configs">configs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectCluster">connectCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `taskRestartPolicy`<sup>Required</sup> <a name="taskRestartPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.taskRestartPolicy"></a>

```java
public GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference getTaskRestartPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference">GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.timeouts"></a>

```java
public GoogleManagedKafkaConnectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference">GoogleManagedKafkaConnectorTimeoutsOutputReference</a>

---

##### `configsInput`<sup>Optional</sup> <a name="configsInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.configsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectClusterInput`<sup>Optional</sup> <a name="connectClusterInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectClusterInput"></a>

```java
public java.lang.String getConnectClusterInput();
```

- *Type:* java.lang.String

---

##### `connectorIdInput`<sup>Optional</sup> <a name="connectorIdInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectorIdInput"></a>

```java
public java.lang.String getConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `taskRestartPolicyInput`<sup>Optional</sup> <a name="taskRestartPolicyInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.taskRestartPolicyInput"></a>

```java
public GoogleManagedKafkaConnectorTaskRestartPolicy getTaskRestartPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.timeoutsInput"></a>

```java
public IResolvable|GoogleManagedKafkaConnectorTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a>

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.configs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectCluster`<sup>Required</sup> <a name="connectCluster" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectCluster"></a>

```java
public java.lang.String getConnectCluster();
```

- *Type:* java.lang.String

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleManagedKafkaConnectorConfig <a name="GoogleManagedKafkaConnectorConfig" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_connector.GoogleManagedKafkaConnectorConfig;

GoogleManagedKafkaConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectCluster(java.lang.String)
    .connectorId(java.lang.String)
    .location(java.lang.String)
//  .configs(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .taskRestartPolicy(GoogleManagedKafkaConnectorTaskRestartPolicy)
//  .timeouts(GoogleManagedKafkaConnectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.connectCluster">connectCluster</a></code> | <code>java.lang.String</code> | The connect cluster name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | The ID to use for the connector, which will become the final component of the connector's name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.configs">configs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#id GoogleManagedKafkaConnector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#project GoogleManagedKafkaConnector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.taskRestartPolicy">taskRestartPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a></code> | task_restart_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectCluster`<sup>Required</sup> <a name="connectCluster" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.connectCluster"></a>

```java
public java.lang.String getConnectCluster();
```

- *Type:* java.lang.String

The connect cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#connect_cluster GoogleManagedKafkaConnector#connect_cluster}

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

The ID to use for the connector, which will become the final component of the connector's name.

This value is structured like: 'my-connector-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#connector_id GoogleManagedKafkaConnector#connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#location GoogleManagedKafkaConnector#location}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.configs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#configs GoogleManagedKafkaConnector#configs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#deletion_policy GoogleManagedKafkaConnector#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#id GoogleManagedKafkaConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#project GoogleManagedKafkaConnector#project}.

---

##### `taskRestartPolicy`<sup>Optional</sup> <a name="taskRestartPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.taskRestartPolicy"></a>

```java
public GoogleManagedKafkaConnectorTaskRestartPolicy getTaskRestartPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a>

task_restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#task_restart_policy GoogleManagedKafkaConnector#task_restart_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.timeouts"></a>

```java
public GoogleManagedKafkaConnectorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#timeouts GoogleManagedKafkaConnector#timeouts}

---

### GoogleManagedKafkaConnectorTaskRestartPolicy <a name="GoogleManagedKafkaConnectorTaskRestartPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_connector.GoogleManagedKafkaConnectorTaskRestartPolicy;

GoogleManagedKafkaConnectorTaskRestartPolicy.builder()
//  .maximumBackoff(java.lang.String)
//  .minimumBackoff(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy.property.maximumBackoff">maximumBackoff</a></code> | <code>java.lang.String</code> | The maximum amount of time to wait before retrying a failed task. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy.property.minimumBackoff">minimumBackoff</a></code> | <code>java.lang.String</code> | The minimum amount of time to wait before retrying a failed task. |

---

##### `maximumBackoff`<sup>Optional</sup> <a name="maximumBackoff" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy.property.maximumBackoff"></a>

```java
public java.lang.String getMaximumBackoff();
```

- *Type:* java.lang.String

The maximum amount of time to wait before retrying a failed task.

This sets an upper bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#maximum_backoff GoogleManagedKafkaConnector#maximum_backoff}

---

##### `minimumBackoff`<sup>Optional</sup> <a name="minimumBackoff" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy.property.minimumBackoff"></a>

```java
public java.lang.String getMinimumBackoff();
```

- *Type:* java.lang.String

The minimum amount of time to wait before retrying a failed task.

This sets a lower bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#minimum_backoff GoogleManagedKafkaConnector#minimum_backoff}

---

### GoogleManagedKafkaConnectorTimeouts <a name="GoogleManagedKafkaConnectorTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_connector.GoogleManagedKafkaConnectorTimeouts;

GoogleManagedKafkaConnectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#create GoogleManagedKafkaConnector#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#delete GoogleManagedKafkaConnector#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#update GoogleManagedKafkaConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#create GoogleManagedKafkaConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#delete GoogleManagedKafkaConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_managed_kafka_connector#update GoogleManagedKafkaConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference <a name="GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_connector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference;

new GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMaximumBackoff">resetMaximumBackoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMinimumBackoff">resetMinimumBackoff</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumBackoff` <a name="resetMaximumBackoff" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMaximumBackoff"></a>

```java
public void resetMaximumBackoff()
```

##### `resetMinimumBackoff` <a name="resetMinimumBackoff" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMinimumBackoff"></a>

```java
public void resetMinimumBackoff()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoffInput">maximumBackoffInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoffInput">minimumBackoffInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoff">maximumBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoff">minimumBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumBackoffInput`<sup>Optional</sup> <a name="maximumBackoffInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoffInput"></a>

```java
public java.lang.String getMaximumBackoffInput();
```

- *Type:* java.lang.String

---

##### `minimumBackoffInput`<sup>Optional</sup> <a name="minimumBackoffInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoffInput"></a>

```java
public java.lang.String getMinimumBackoffInput();
```

- *Type:* java.lang.String

---

##### `maximumBackoff`<sup>Required</sup> <a name="maximumBackoff" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoff"></a>

```java
public java.lang.String getMaximumBackoff();
```

- *Type:* java.lang.String

---

##### `minimumBackoff`<sup>Required</sup> <a name="minimumBackoff" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoff"></a>

```java
public java.lang.String getMinimumBackoff();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.internalValue"></a>

```java
public GoogleManagedKafkaConnectorTaskRestartPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a>

---


### GoogleManagedKafkaConnectorTimeoutsOutputReference <a name="GoogleManagedKafkaConnectorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_managed_kafka_connector.GoogleManagedKafkaConnectorTimeoutsOutputReference;

new GoogleManagedKafkaConnectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleManagedKafkaConnectorTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a>

---



