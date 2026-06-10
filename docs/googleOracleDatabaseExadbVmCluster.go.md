# `googleOracleDatabaseExadbVmCluster` Submodule <a name="`googleOracleDatabaseExadbVmCluster` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseExadbVmCluster <a name="GoogleOracleDatabaseExadbVmCluster" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster google_oracle_database_exadb_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

googleoracledatabaseexadbvmcluster.NewGoogleOracleDatabaseExadbVmCluster(scope Construct, id *string, config GoogleOracleDatabaseExadbVmClusterConfig) GoogleOracleDatabaseExadbVmCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig">GoogleOracleDatabaseExadbVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig">GoogleOracleDatabaseExadbVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetOdbNetwork">ResetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties"></a>

```go
func PutProperties(value GoogleOracleDatabaseExadbVmClusterProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putTimeouts"></a>

```go
func PutTimeouts(value GoogleOracleDatabaseExadbVmClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetOdbNetwork` <a name="ResetOdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetOdbNetwork"></a>

```go
func ResetOdbNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

googleoracledatabaseexadbvmcluster.GoogleOracleDatabaseExadbVmCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

googleoracledatabaseexadbvmcluster.GoogleOracleDatabaseExadbVmCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

googleoracledatabaseexadbvmcluster.GoogleOracleDatabaseExadbVmCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

googleoracledatabaseexadbvmcluster.GoogleOracleDatabaseExadbVmCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleOracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleOracleDatabaseExadbVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleOracleDatabaseExadbVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseExadbVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.gcpOracleZone">GcpOracleZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference">GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.backupOdbSubnetInput">BackupOdbSubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput">ExadbVmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbNetworkInput">OdbNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbSubnetInput">OdbSubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.backupOdbSubnet">BackupOdbSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.exadbVmClusterId">ExadbVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbNetwork">OdbNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbSubnet">OdbSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.gcpOracleZone"></a>

```go
func GcpOracleZone() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.properties"></a>

```go
func Properties() GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.timeouts"></a>

```go
func Timeouts() GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference">GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference</a>

---

##### `BackupOdbSubnetInput`<sup>Optional</sup> <a name="BackupOdbSubnetInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.backupOdbSubnetInput"></a>

```go
func BackupOdbSubnetInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExadbVmClusterIdInput`<sup>Optional</sup> <a name="ExadbVmClusterIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput"></a>

```go
func ExadbVmClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OdbNetworkInput`<sup>Optional</sup> <a name="OdbNetworkInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbNetworkInput"></a>

```go
func OdbNetworkInput() *string
```

- *Type:* *string

---

##### `OdbSubnetInput`<sup>Optional</sup> <a name="OdbSubnetInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbSubnetInput"></a>

```go
func OdbSubnetInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.propertiesInput"></a>

```go
func PropertiesInput() GoogleOracleDatabaseExadbVmClusterProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupOdbSubnet`<sup>Required</sup> <a name="BackupOdbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.backupOdbSubnet"></a>

```go
func BackupOdbSubnet() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExadbVmClusterId`<sup>Required</sup> <a name="ExadbVmClusterId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.exadbVmClusterId"></a>

```go
func ExadbVmClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OdbNetwork`<sup>Required</sup> <a name="OdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbNetwork"></a>

```go
func OdbNetwork() *string
```

- *Type:* *string

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbSubnet"></a>

```go
func OdbSubnet() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseExadbVmClusterConfig <a name="GoogleOracleDatabaseExadbVmClusterConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

&googleoracledatabaseexadbvmcluster.GoogleOracleDatabaseExadbVmClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BackupOdbSubnet: *string,
	DisplayName: *string,
	ExadbVmClusterId: *string,
	Location: *string,
	OdbSubnet: *string,
	Properties: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties,
	DeletionPolicy: *string,
	DeletionProtection: interface{},
	Id: *string,
	Labels: *map[string]*string,
	OdbNetwork: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet">BackupOdbSubnet</a></code> | <code>*string</code> | The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId">ExadbVmClusterId</a></code> | <code>*string</code> | The ID of the ExadbVmCluster to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.odbSubnet">OdbSubnet</a></code> | <code>*string</code> | The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels or tags associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.odbNetwork">OdbNetwork</a></code> | <code>*string</code> | The name of the OdbNetwork associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#project GoogleOracleDatabaseExadbVmCluster#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupOdbSubnet`<sup>Required</sup> <a name="BackupOdbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet"></a>

```go
BackupOdbSubnet *string
```

- *Type:* *string

The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#backup_odb_subnet GoogleOracleDatabaseExadbVmCluster#backup_odb_subnet}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the ExadbVmCluster.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#display_name GoogleOracleDatabaseExadbVmCluster#display_name}

---

##### `ExadbVmClusterId`<sup>Required</sup> <a name="ExadbVmClusterId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId"></a>

```go
ExadbVmClusterId *string
```

- *Type:* *string

The ID of the ExadbVmCluster to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#exadb_vm_cluster_id GoogleOracleDatabaseExadbVmCluster#exadb_vm_cluster_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#location GoogleOracleDatabaseExadbVmCluster#location}

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.odbSubnet"></a>

```go
OdbSubnet *string
```

- *Type:* *string

The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#odb_subnet GoogleOracleDatabaseExadbVmCluster#odb_subnet}

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.properties"></a>

```go
Properties GoogleOracleDatabaseExadbVmClusterProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#properties GoogleOracleDatabaseExadbVmCluster#properties}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#deletion_policy GoogleOracleDatabaseExadbVmCluster#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#deletion_protection GoogleOracleDatabaseExadbVmCluster#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels or tags associated with the ExadbVmCluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#labels GoogleOracleDatabaseExadbVmCluster#labels}

---

##### `OdbNetwork`<sup>Optional</sup> <a name="OdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.odbNetwork"></a>

```go
OdbNetwork *string
```

- *Type:* *string

The name of the OdbNetwork associated with the ExadbVmCluster.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#odb_network GoogleOracleDatabaseExadbVmCluster#odb_network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#project GoogleOracleDatabaseExadbVmCluster#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.timeouts"></a>

```go
Timeouts GoogleOracleDatabaseExadbVmClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#timeouts GoogleOracleDatabaseExadbVmCluster#timeouts}

---

### GoogleOracleDatabaseExadbVmClusterProperties <a name="GoogleOracleDatabaseExadbVmClusterProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

&googleoracledatabaseexadbvmcluster.GoogleOracleDatabaseExadbVmClusterProperties {
	EnabledEcpuCountPerNode: *f64,
	ExascaleDbStorageVault: *string,
	GridImageId: *string,
	HostnamePrefix: *string,
	NodeCount: *f64,
	ShapeAttribute: *string,
	SshPublicKeys: *[]*string,
	VmFileSystemStorage: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage,
	AdditionalEcpuCountPerNode: *f64,
	ClusterName: *string,
	DataCollectionOptions: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions,
	LicenseModel: *string,
	ScanListenerPortTcp: *f64,
	TimeZone: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode">EnabledEcpuCountPerNode</a></code> | <code>*f64</code> | The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault">ExascaleDbStorageVault</a></code> | <code>*string</code> | The name of ExascaleDbStorageVault associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.gridImageId">GridImageId</a></code> | <code>*string</code> | Grid Infrastructure Version. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.hostnamePrefix">HostnamePrefix</a></code> | <code>*string</code> | Prefix for VM cluster host names. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | The number of nodes/VMs in the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.shapeAttribute">ShapeAttribute</a></code> | <code>*string</code> | The shape attribute of the VM cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | The SSH public keys for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage">VmFileSystemStorage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | vm_file_system_storage block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode">AdditionalEcpuCountPerNode</a></code> | <code>*f64</code> | The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.clusterName">ClusterName</a></code> | <code>*string</code> | The cluster name for Exascale vm cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | SCAN listener port - TCP. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | time_zone block. |

---

##### `EnabledEcpuCountPerNode`<sup>Required</sup> <a name="EnabledEcpuCountPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode"></a>

```go
EnabledEcpuCountPerNode *f64
```

- *Type:* *f64

The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#enabled_ecpu_count_per_node GoogleOracleDatabaseExadbVmCluster#enabled_ecpu_count_per_node}

---

##### `ExascaleDbStorageVault`<sup>Required</sup> <a name="ExascaleDbStorageVault" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault"></a>

```go
ExascaleDbStorageVault *string
```

- *Type:* *string

The name of ExascaleDbStorageVault associated with the ExadbVmCluster.

It can refer to an existing ExascaleDbStorageVault. Or a new one can be
created during the ExadbVmCluster creation (requires
storage_vault_properties to be set).
Format:
projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#exascale_db_storage_vault GoogleOracleDatabaseExadbVmCluster#exascale_db_storage_vault}

---

##### `GridImageId`<sup>Required</sup> <a name="GridImageId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.gridImageId"></a>

```go
GridImageId *string
```

- *Type:* *string

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#grid_image_id GoogleOracleDatabaseExadbVmCluster#grid_image_id}

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.hostnamePrefix"></a>

```go
HostnamePrefix *string
```

- *Type:* *string

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#hostname_prefix GoogleOracleDatabaseExadbVmCluster#hostname_prefix}

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

The number of nodes/VMs in the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#node_count GoogleOracleDatabaseExadbVmCluster#node_count}

---

##### `ShapeAttribute`<sup>Required</sup> <a name="ShapeAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.shapeAttribute"></a>

```go
ShapeAttribute *string
```

- *Type:* *string

The shape attribute of the VM cluster.

The type of Exascale storage used
for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle
Database 23ai and later
Possible values:
SMART_STORAGE
BLOCK_STORAGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#shape_attribute GoogleOracleDatabaseExadbVmCluster#shape_attribute}

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.sshPublicKeys"></a>

```go
SshPublicKeys *[]*string
```

- *Type:* *[]*string

The SSH public keys for the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#ssh_public_keys GoogleOracleDatabaseExadbVmCluster#ssh_public_keys}

---

##### `VmFileSystemStorage`<sup>Required</sup> <a name="VmFileSystemStorage" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage"></a>

```go
VmFileSystemStorage GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

vm_file_system_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#vm_file_system_storage GoogleOracleDatabaseExadbVmCluster#vm_file_system_storage}

---

##### `AdditionalEcpuCountPerNode`<sup>Optional</sup> <a name="AdditionalEcpuCountPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode"></a>

```go
AdditionalEcpuCountPerNode *f64
```

- *Type:* *f64

The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#additional_ecpu_count_per_node GoogleOracleDatabaseExadbVmCluster#additional_ecpu_count_per_node}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

The cluster name for Exascale vm cluster.

The cluster name must begin with
an alphabetic character and may contain hyphens(-) but can not contain
underscores(_). It should be not more than 11 characters and is not case
sensitive.
OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#cluster_name GoogleOracleDatabaseExadbVmCluster#cluster_name}

---

##### `DataCollectionOptions`<sup>Optional</sup> <a name="DataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions"></a>

```go
DataCollectionOptions GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#data_collection_options GoogleOracleDatabaseExadbVmCluster#data_collection_options}

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#license_model GoogleOracleDatabaseExadbVmCluster#license_model}

---

##### `ScanListenerPortTcp`<sup>Optional</sup> <a name="ScanListenerPortTcp" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp"></a>

```go
ScanListenerPortTcp *f64
```

- *Type:* *f64

SCAN listener port - TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#scan_listener_port_tcp GoogleOracleDatabaseExadbVmCluster#scan_listener_port_tcp}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.timeZone"></a>

```go
TimeZone GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#time_zone GoogleOracleDatabaseExadbVmCluster#time_zone}

---

### GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions <a name="GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

&googleoracledatabaseexadbvmcluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions {
	IsDiagnosticsEventsEnabled: interface{},
	IsHealthMonitoringEnabled: interface{},
	IsIncidentLogsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | Indicates whether to enable data collection for diagnostics. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>interface{}</code> | Indicates whether to enable health monitoring. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | Indicates whether to enable incident logs and trace collection. |

---

##### `IsDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```go
IsDiagnosticsEventsEnabled interface{}
```

- *Type:* interface{}

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#is_diagnostics_events_enabled GoogleOracleDatabaseExadbVmCluster#is_diagnostics_events_enabled}

---

##### `IsHealthMonitoringEnabled`<sup>Optional</sup> <a name="IsHealthMonitoringEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```go
IsHealthMonitoringEnabled interface{}
```

- *Type:* interface{}

Indicates whether to enable health monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#is_health_monitoring_enabled GoogleOracleDatabaseExadbVmCluster#is_health_monitoring_enabled}

---

##### `IsIncidentLogsEnabled`<sup>Optional</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```go
IsIncidentLogsEnabled interface{}
```

- *Type:* interface{}

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#is_incident_logs_enabled GoogleOracleDatabaseExadbVmCluster#is_incident_logs_enabled}

---

### GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone <a name="GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

&googleoracledatabaseexadbvmcluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone {
	Id: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.property.id">Id</a></code> | <code>*string</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.property.version">Version</a></code> | <code>*string</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.property.id"></a>

```go
Id *string
```

- *Type:* *string

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.property.version"></a>

```go
Version *string
```

- *Type:* *string

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#version GoogleOracleDatabaseExadbVmCluster#version}

---

### GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage <a name="GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

&googleoracledatabaseexadbvmcluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage {
	SizeInGbsPerNode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode">SizeInGbsPerNode</a></code> | <code>*f64</code> | The storage allocation for the exadbvmcluster per node, in gigabytes (GB). |

---

##### `SizeInGbsPerNode`<sup>Required</sup> <a name="SizeInGbsPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode"></a>

```go
SizeInGbsPerNode *f64
```

- *Type:* *f64

The storage allocation for the exadbvmcluster per node, in gigabytes (GB).

This field is used to calculate the total storage allocation for the
exadbvmcluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#size_in_gbs_per_node GoogleOracleDatabaseExadbVmCluster#size_in_gbs_per_node}

---

### GoogleOracleDatabaseExadbVmClusterTimeouts <a name="GoogleOracleDatabaseExadbVmClusterTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

&googleoracledatabaseexadbvmcluster.GoogleOracleDatabaseExadbVmClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#create GoogleOracleDatabaseExadbVmCluster#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#delete GoogleOracleDatabaseExadbVmCluster#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#update GoogleOracleDatabaseExadbVmCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#create GoogleOracleDatabaseExadbVmCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#delete GoogleOracleDatabaseExadbVmCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_oracle_database_exadb_vm_cluster#update GoogleOracleDatabaseExadbVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference <a name="GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

googleoracledatabaseexadbvmcluster.NewGoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">ResetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">ResetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">ResetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDiagnosticsEventsEnabled` <a name="ResetIsDiagnosticsEventsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```go
func ResetIsDiagnosticsEventsEnabled()
```

##### `ResetIsHealthMonitoringEnabled` <a name="ResetIsHealthMonitoringEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```go
func ResetIsHealthMonitoringEnabled()
```

##### `ResetIsIncidentLogsEnabled` <a name="ResetIsIncidentLogsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```go
func ResetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">IsDiagnosticsEventsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">IsHealthMonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">IsIncidentLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```go
func IsDiagnosticsEventsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="IsHealthMonitoringEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```go
func IsHealthMonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabledInput`<sup>Optional</sup> <a name="IsIncidentLogsEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```go
func IsIncidentLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```go
func IsDiagnosticsEventsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```go
func IsHealthMonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```go
func IsIncidentLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---


### GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference <a name="GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

googleoracledatabaseexadbvmcluster.NewGoogleOracleDatabaseExadbVmClusterPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions">PutDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage">PutVmFileSystemStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode">ResetAdditionalEcpuCountPerNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions">ResetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp">ResetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataCollectionOptions` <a name="PutDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions"></a>

```go
func PutDataCollectionOptions(value GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone"></a>

```go
func PutTimeZone(value GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---

##### `PutVmFileSystemStorage` <a name="PutVmFileSystemStorage" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage"></a>

```go
func PutVmFileSystemStorage(value GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---

##### `ResetAdditionalEcpuCountPerNode` <a name="ResetAdditionalEcpuCountPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode"></a>

```go
func ResetAdditionalEcpuCountPerNode()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetDataCollectionOptions` <a name="ResetDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions"></a>

```go
func ResetDataCollectionOptions()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel"></a>

```go
func ResetLicenseModel()
```

##### `ResetScanListenerPortTcp` <a name="ResetScanListenerPortTcp" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp"></a>

```go
func ResetScanListenerPortTcp()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion">GiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb">MemorySizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri">OciUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage">VmFileSystemStorage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput">AdditionalEcpuCountPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput">DataCollectionOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput">EnabledEcpuCountPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput">ExascaleDbStorageVaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput">GridImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput">HostnamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput">ScanListenerPortTcpInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput">ShapeAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput">VmFileSystemStorageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode">AdditionalEcpuCountPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode">EnabledEcpuCountPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault">ExascaleDbStorageVault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId">GridImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix">HostnamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute">ShapeAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions"></a>

```go
func DataCollectionOptions() GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a>

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion"></a>

```go
func GiVersion() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```go
func MemorySizeGb() *f64
```

- *Type:* *f64

---

##### `OciUri`<sup>Required</sup> <a name="OciUri" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri"></a>

```go
func OciUri() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone"></a>

```go
func TimeZone() GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a>

---

##### `VmFileSystemStorage`<sup>Required</sup> <a name="VmFileSystemStorage" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage"></a>

```go
func VmFileSystemStorage() GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a>

---

##### `AdditionalEcpuCountPerNodeInput`<sup>Optional</sup> <a name="AdditionalEcpuCountPerNodeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput"></a>

```go
func AdditionalEcpuCountPerNodeInput() *f64
```

- *Type:* *f64

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `DataCollectionOptionsInput`<sup>Optional</sup> <a name="DataCollectionOptionsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput"></a>

```go
func DataCollectionOptionsInput() GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---

##### `EnabledEcpuCountPerNodeInput`<sup>Optional</sup> <a name="EnabledEcpuCountPerNodeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput"></a>

```go
func EnabledEcpuCountPerNodeInput() *f64
```

- *Type:* *f64

---

##### `ExascaleDbStorageVaultInput`<sup>Optional</sup> <a name="ExascaleDbStorageVaultInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput"></a>

```go
func ExascaleDbStorageVaultInput() *string
```

- *Type:* *string

---

##### `GridImageIdInput`<sup>Optional</sup> <a name="GridImageIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput"></a>

```go
func GridImageIdInput() *string
```

- *Type:* *string

---

##### `HostnamePrefixInput`<sup>Optional</sup> <a name="HostnamePrefixInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput"></a>

```go
func HostnamePrefixInput() *string
```

- *Type:* *string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcpInput`<sup>Optional</sup> <a name="ScanListenerPortTcpInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput"></a>

```go
func ScanListenerPortTcpInput() *f64
```

- *Type:* *f64

---

##### `ShapeAttributeInput`<sup>Optional</sup> <a name="ShapeAttributeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput"></a>

```go
func ShapeAttributeInput() *string
```

- *Type:* *string

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput"></a>

```go
func SshPublicKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---

##### `VmFileSystemStorageInput`<sup>Optional</sup> <a name="VmFileSystemStorageInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput"></a>

```go
func VmFileSystemStorageInput() GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---

##### `AdditionalEcpuCountPerNode`<sup>Required</sup> <a name="AdditionalEcpuCountPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode"></a>

```go
func AdditionalEcpuCountPerNode() *f64
```

- *Type:* *f64

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `EnabledEcpuCountPerNode`<sup>Required</sup> <a name="EnabledEcpuCountPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode"></a>

```go
func EnabledEcpuCountPerNode() *f64
```

- *Type:* *f64

---

##### `ExascaleDbStorageVault`<sup>Required</sup> <a name="ExascaleDbStorageVault" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault"></a>

```go
func ExascaleDbStorageVault() *string
```

- *Type:* *string

---

##### `GridImageId`<sup>Required</sup> <a name="GridImageId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId"></a>

```go
func GridImageId() *string
```

- *Type:* *string

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```go
func HostnamePrefix() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```go
func ScanListenerPortTcp() *f64
```

- *Type:* *f64

---

##### `ShapeAttribute`<sup>Required</sup> <a name="ShapeAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute"></a>

```go
func ShapeAttribute() *string
```

- *Type:* *string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseExadbVmClusterProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a>

---


### GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference <a name="GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

googleoracledatabaseexadbvmcluster.NewGoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---


### GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference <a name="GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

googleoracledatabaseexadbvmcluster.NewGoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput">SizeInGbsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode">SizeInGbsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeInGbsPerNodeInput`<sup>Optional</sup> <a name="SizeInGbsPerNodeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput"></a>

```go
func SizeInGbsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `SizeInGbsPerNode`<sup>Required</sup> <a name="SizeInGbsPerNode" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode"></a>

```go
func SizeInGbsPerNode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---


### GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference <a name="GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexadbvmcluster"

googleoracledatabaseexadbvmcluster.NewGoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



