# `googleRedisClusterTokenAuthUser` Submodule <a name="`googleRedisClusterTokenAuthUser` Submodule" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRedisClusterTokenAuthUser <a name="GoogleRedisClusterTokenAuthUser" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user google_redis_cluster_token_auth_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleRedisClusterTokenAuthUser(Construct Scope, string Id, GoogleRedisClusterTokenAuthUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig">GoogleRedisClusterTokenAuthUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig">GoogleRedisClusterTokenAuthUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleRedisClusterTokenAuthUserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeouts">GoogleRedisClusterTokenAuthUserTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleRedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleRedisClusterTokenAuthUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleRedisClusterTokenAuthUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleRedisClusterTokenAuthUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleRedisClusterTokenAuthUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleRedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleRedisClusterTokenAuthUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleRedisClusterTokenAuthUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleRedisClusterTokenAuthUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference">GoogleRedisClusterTokenAuthUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeouts">GoogleRedisClusterTokenAuthUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.timeouts"></a>

```csharp
public GoogleRedisClusterTokenAuthUserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference">GoogleRedisClusterTokenAuthUserTimeoutsOutputReference</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleRedisClusterTokenAuthUserTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeouts">GoogleRedisClusterTokenAuthUserTimeouts</a>

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRedisClusterTokenAuthUserConfig <a name="GoogleRedisClusterTokenAuthUserConfig" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleRedisClusterTokenAuthUserConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Cluster,
    string UserId,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    string Region = null,
    GoogleRedisClusterTokenAuthUserTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.cluster">Cluster</a></code> | <code>string</code> | The name or resource ID of the Redis cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.userId">UserId</a></code> | <code>string</code> | The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#id GoogleRedisClusterTokenAuthUser#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#project GoogleRedisClusterTokenAuthUser#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.region">Region</a></code> | <code>string</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeouts">GoogleRedisClusterTokenAuthUserTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The name or resource ID of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#cluster GoogleRedisClusterTokenAuthUser#cluster}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#user_id GoogleRedisClusterTokenAuthUser#user_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#deletion_policy GoogleRedisClusterTokenAuthUser#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#id GoogleRedisClusterTokenAuthUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#project GoogleRedisClusterTokenAuthUser#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#region GoogleRedisClusterTokenAuthUser#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserConfig.property.timeouts"></a>

```csharp
public GoogleRedisClusterTokenAuthUserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeouts">GoogleRedisClusterTokenAuthUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#timeouts GoogleRedisClusterTokenAuthUser#timeouts}

---

### GoogleRedisClusterTokenAuthUserTimeouts <a name="GoogleRedisClusterTokenAuthUserTimeouts" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleRedisClusterTokenAuthUserTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#create GoogleRedisClusterTokenAuthUser#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#delete GoogleRedisClusterTokenAuthUser#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#create GoogleRedisClusterTokenAuthUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_redis_cluster_token_auth_user#delete GoogleRedisClusterTokenAuthUser#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleRedisClusterTokenAuthUserTimeoutsOutputReference <a name="GoogleRedisClusterTokenAuthUserTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleRedisClusterTokenAuthUserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeouts">GoogleRedisClusterTokenAuthUserTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleRedisClusterTokenAuthUserTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleRedisClusterTokenAuthUser.GoogleRedisClusterTokenAuthUserTimeouts">GoogleRedisClusterTokenAuthUserTimeouts</a>

---



