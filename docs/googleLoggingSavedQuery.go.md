# `googleLoggingSavedQuery` Submodule <a name="`googleLoggingSavedQuery` Submodule" id="@cdktn/provider-google-beta.googleLoggingSavedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingSavedQuery <a name="GoogleLoggingSavedQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query google_logging_saved_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

googleloggingsavedquery.NewGoogleLoggingSavedQuery(scope Construct, id *string, config GoogleLoggingSavedQueryConfig) GoogleLoggingSavedQuery
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig">GoogleLoggingSavedQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig">GoogleLoggingSavedQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery">PutLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery">PutOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetLoggingQuery">ResetLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOpsAnalyticsQuery">ResetOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingQuery` <a name="PutLoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery"></a>

```go
func PutLoggingQuery(value GoogleLoggingSavedQueryLoggingQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---

##### `PutOpsAnalyticsQuery` <a name="PutOpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery"></a>

```go
func PutOpsAnalyticsQuery(value GoogleLoggingSavedQueryOpsAnalyticsQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts"></a>

```go
func PutTimeouts(value GoogleLoggingSavedQueryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetId"></a>

```go
func ResetId()
```

##### `ResetLoggingQuery` <a name="ResetLoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetLoggingQuery"></a>

```go
func ResetLoggingQuery()
```

##### `ResetOpsAnalyticsQuery` <a name="ResetOpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOpsAnalyticsQuery"></a>

```go
func ResetOpsAnalyticsQuery()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleLoggingSavedQuery resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

googleloggingsavedquery.GoogleLoggingSavedQuery_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

googleloggingsavedquery.GoogleLoggingSavedQuery_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

googleloggingsavedquery.GoogleLoggingSavedQuery_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

googleloggingsavedquery.GoogleLoggingSavedQuery_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleLoggingSavedQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleLoggingSavedQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleLoggingSavedQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleLoggingSavedQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQuery">LoggingQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference">GoogleLoggingSavedQueryLoggingQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQuery">OpsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference">GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference">GoogleLoggingSavedQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQueryInput">LoggingQueryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQueryInput">OpsAnalyticsQueryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `LoggingQuery`<sup>Required</sup> <a name="LoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQuery"></a>

```go
func LoggingQuery() GoogleLoggingSavedQueryLoggingQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference">GoogleLoggingSavedQueryLoggingQueryOutputReference</a>

---

##### `OpsAnalyticsQuery`<sup>Required</sup> <a name="OpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQuery"></a>

```go
func OpsAnalyticsQuery() GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference">GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeouts"></a>

```go
func Timeouts() GoogleLoggingSavedQueryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference">GoogleLoggingSavedQueryTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LoggingQueryInput`<sup>Optional</sup> <a name="LoggingQueryInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQueryInput"></a>

```go
func LoggingQueryInput() GoogleLoggingSavedQueryLoggingQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpsAnalyticsQueryInput`<sup>Optional</sup> <a name="OpsAnalyticsQueryInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQueryInput"></a>

```go
func OpsAnalyticsQueryInput() GoogleLoggingSavedQueryOpsAnalyticsQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingSavedQueryConfig <a name="GoogleLoggingSavedQueryConfig" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

&googleloggingsavedquery.GoogleLoggingSavedQueryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Location: *string,
	Name: *string,
	Parent: *string,
	Visibility: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	LoggingQuery: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery,
	OpsAnalyticsQuery: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The user-visible display name of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions). |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.name">Name</a></code> | <code>*string</code> | The name of the saved query. For example: 'my-saved-query'. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.visibility">Visibility</a></code> | <code>*string</code> | The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.description">Description</a></code> | <code>*string</code> | A description of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.loggingQuery">LoggingQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | logging_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.opsAnalyticsQuery">OpsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | ops_analytics_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The user-visible display name of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#display_name GoogleLoggingSavedQuery#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#location GoogleLoggingSavedQuery#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the saved query. For example: 'my-saved-query'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#name GoogleLoggingSavedQuery#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#parent GoogleLoggingSavedQuery#parent}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#visibility GoogleLoggingSavedQuery#visibility}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#deletion_policy GoogleLoggingSavedQuery#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#description GoogleLoggingSavedQuery#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingQuery`<sup>Optional</sup> <a name="LoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.loggingQuery"></a>

```go
LoggingQuery GoogleLoggingSavedQueryLoggingQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

logging_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#logging_query GoogleLoggingSavedQuery#logging_query}

---

##### `OpsAnalyticsQuery`<sup>Optional</sup> <a name="OpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.opsAnalyticsQuery"></a>

```go
OpsAnalyticsQuery GoogleLoggingSavedQueryOpsAnalyticsQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

ops_analytics_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#ops_analytics_query GoogleLoggingSavedQuery#ops_analytics_query}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.timeouts"></a>

```go
Timeouts GoogleLoggingSavedQueryTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#timeouts GoogleLoggingSavedQuery#timeouts}

---

### GoogleLoggingSavedQueryLoggingQuery <a name="GoogleLoggingSavedQueryLoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

&googleloggingsavedquery.GoogleLoggingSavedQueryLoggingQuery {
	Filter: *string,
	SummaryFieldEnd: *f64,
	SummaryFields: interface{},
	SummaryFieldStart: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.filter">Filter</a></code> | <code>*string</code> | An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldEnd">SummaryFieldEnd</a></code> | <code>*f64</code> | Characters will be counted from the end of the string. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFields">SummaryFields</a></code> | <code>interface{}</code> | summary_fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldStart">SummaryFieldStart</a></code> | <code>*f64</code> | Characters will be counted from the start of the string. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#filter GoogleLoggingSavedQuery#filter}

---

##### `SummaryFieldEnd`<sup>Optional</sup> <a name="SummaryFieldEnd" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldEnd"></a>

```go
SummaryFieldEnd *f64
```

- *Type:* *f64

Characters will be counted from the end of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#summary_field_end GoogleLoggingSavedQuery#summary_field_end}

---

##### `SummaryFields`<sup>Optional</sup> <a name="SummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFields"></a>

```go
SummaryFields interface{}
```

- *Type:* interface{}

summary_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#summary_fields GoogleLoggingSavedQuery#summary_fields}

---

##### `SummaryFieldStart`<sup>Optional</sup> <a name="SummaryFieldStart" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldStart"></a>

```go
SummaryFieldStart *f64
```

- *Type:* *f64

Characters will be counted from the start of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#summary_field_start GoogleLoggingSavedQuery#summary_field_start}

---

### GoogleLoggingSavedQueryLoggingQuerySummaryFields <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

&googleloggingsavedquery.GoogleLoggingSavedQueryLoggingQuerySummaryFields {
	Field: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.property.field">Field</a></code> | <code>*string</code> | The field from the LogEntry to include in the summary line. |

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.property.field"></a>

```go
Field *string
```

- *Type:* *string

The field from the LogEntry to include in the summary line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#field GoogleLoggingSavedQuery#field}

---

### GoogleLoggingSavedQueryOpsAnalyticsQuery <a name="GoogleLoggingSavedQueryOpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

&googleloggingsavedquery.GoogleLoggingSavedQueryOpsAnalyticsQuery {
	SqlQueryText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText">SqlQueryText</a></code> | <code>*string</code> | A logs analytics SQL query, which generally follows BigQuery format. |

---

##### `SqlQueryText`<sup>Required</sup> <a name="SqlQueryText" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText"></a>

```go
SqlQueryText *string
```

- *Type:* *string

A logs analytics SQL query, which generally follows BigQuery format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#sql_query_text GoogleLoggingSavedQuery#sql_query_text}

---

### GoogleLoggingSavedQueryTimeouts <a name="GoogleLoggingSavedQueryTimeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

&googleloggingsavedquery.GoogleLoggingSavedQueryTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#create GoogleLoggingSavedQuery#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#delete GoogleLoggingSavedQuery#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#update GoogleLoggingSavedQuery#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#create GoogleLoggingSavedQuery#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#delete GoogleLoggingSavedQuery#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#update GoogleLoggingSavedQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingSavedQueryLoggingQueryOutputReference <a name="GoogleLoggingSavedQueryLoggingQueryOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

googleloggingsavedquery.NewGoogleLoggingSavedQueryLoggingQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLoggingSavedQueryLoggingQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields">PutSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd">ResetSummaryFieldEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields">ResetSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart">ResetSummaryFieldStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSummaryFields` <a name="PutSummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields"></a>

```go
func PutSummaryFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSummaryFieldEnd` <a name="ResetSummaryFieldEnd" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd"></a>

```go
func ResetSummaryFieldEnd()
```

##### `ResetSummaryFields` <a name="ResetSummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields"></a>

```go
func ResetSummaryFields()
```

##### `ResetSummaryFieldStart` <a name="ResetSummaryFieldStart" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart"></a>

```go
func ResetSummaryFieldStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFields">SummaryFields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList">GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput">SummaryFieldEndInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput">SummaryFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput">SummaryFieldStartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd">SummaryFieldEnd</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart">SummaryFieldStart</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SummaryFields`<sup>Required</sup> <a name="SummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFields"></a>

```go
func SummaryFields() GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList">GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `SummaryFieldEndInput`<sup>Optional</sup> <a name="SummaryFieldEndInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput"></a>

```go
func SummaryFieldEndInput() *f64
```

- *Type:* *f64

---

##### `SummaryFieldsInput`<sup>Optional</sup> <a name="SummaryFieldsInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput"></a>

```go
func SummaryFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `SummaryFieldStartInput`<sup>Optional</sup> <a name="SummaryFieldStartInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput"></a>

```go
func SummaryFieldStartInput() *f64
```

- *Type:* *f64

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `SummaryFieldEnd`<sup>Required</sup> <a name="SummaryFieldEnd" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd"></a>

```go
func SummaryFieldEnd() *f64
```

- *Type:* *f64

---

##### `SummaryFieldStart`<sup>Required</sup> <a name="SummaryFieldStart" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart"></a>

```go
func SummaryFieldStart() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLoggingSavedQueryLoggingQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---


### GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

googleloggingsavedquery.NewGoogleLoggingSavedQueryLoggingQuerySummaryFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get"></a>

```go
func Get(index *f64) GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

googleloggingsavedquery.NewGoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetField` <a name="ResetField" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField"></a>

```go
func ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference <a name="GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

googleloggingsavedquery.NewGoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput">SqlQueryTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText">SqlQueryText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SqlQueryTextInput`<sup>Optional</sup> <a name="SqlQueryTextInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput"></a>

```go
func SqlQueryTextInput() *string
```

- *Type:* *string

---

##### `SqlQueryText`<sup>Required</sup> <a name="SqlQueryText" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText"></a>

```go
func SqlQueryText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLoggingSavedQueryOpsAnalyticsQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---


### GoogleLoggingSavedQueryTimeoutsOutputReference <a name="GoogleLoggingSavedQueryTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleloggingsavedquery"

googleloggingsavedquery.NewGoogleLoggingSavedQueryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLoggingSavedQueryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



