# `googleApigeeDeveloperApp` Submodule <a name="`googleApigeeDeveloperApp` Submodule" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeDeveloperApp <a name="GoogleApigeeDeveloperApp" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app google_apigee_developer_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperApp(Construct Scope, string Id, GoogleApigeeDeveloperAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig">GoogleApigeeDeveloperAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig">GoogleApigeeDeveloperAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetApiProducts">ResetApiProducts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetAppFamily">ResetAppFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetKeyExpiresIn">ResetKeyExpiresIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putAttributes"></a>

```csharp
private void PutAttributes(IResolvable|GoogleApigeeDeveloperAppAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApigeeDeveloperAppTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a>

---

##### `ResetApiProducts` <a name="ResetApiProducts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetApiProducts"></a>

```csharp
private void ResetApiProducts()
```

##### `ResetAppFamily` <a name="ResetAppFamily" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetAppFamily"></a>

```csharp
private void ResetAppFamily()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyExpiresIn` <a name="ResetKeyExpiresIn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetKeyExpiresIn"></a>

```csharp
private void ResetKeyExpiresIn()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApigeeDeveloperApp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeDeveloperApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeDeveloperApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeDeveloperApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeDeveloperApp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleApigeeDeveloperApp resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeDeveloperApp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeDeveloperApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeDeveloperApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList">GoogleApigeeDeveloperAppAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList">GoogleApigeeDeveloperAppCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerId">DeveloperId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.lastModifiedAt">LastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference">GoogleApigeeDeveloperAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.apiProductsInput">ApiProductsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appFamilyInput">AppFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.attributesInput">AttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.callbackUrlInput">CallbackUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerEmailInput">DeveloperEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.keyExpiresInInput">KeyExpiresInInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.apiProducts">ApiProducts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appFamily">AppFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.callbackUrl">CallbackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerEmail">DeveloperEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.keyExpiresIn">KeyExpiresIn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.attributes"></a>

```csharp
public GoogleApigeeDeveloperAppAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList">GoogleApigeeDeveloperAppAttributesList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.credentials"></a>

```csharp
public GoogleApigeeDeveloperAppCredentialsList Credentials { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList">GoogleApigeeDeveloperAppCredentialsList</a>

---

##### `DeveloperId`<sup>Required</sup> <a name="DeveloperId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerId"></a>

```csharp
public string DeveloperId { get; }
```

- *Type:* string

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.lastModifiedAt"></a>

```csharp
public string LastModifiedAt { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.timeouts"></a>

```csharp
public GoogleApigeeDeveloperAppTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference">GoogleApigeeDeveloperAppTimeoutsOutputReference</a>

---

##### `ApiProductsInput`<sup>Optional</sup> <a name="ApiProductsInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.apiProductsInput"></a>

```csharp
public string[] ApiProductsInput { get; }
```

- *Type:* string[]

---

##### `AppFamilyInput`<sup>Optional</sup> <a name="AppFamilyInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appFamilyInput"></a>

```csharp
public string AppFamilyInput { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.attributesInput"></a>

```csharp
public IResolvable|GoogleApigeeDeveloperAppAttributes[] AttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>[]

---

##### `CallbackUrlInput`<sup>Optional</sup> <a name="CallbackUrlInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.callbackUrlInput"></a>

```csharp
public string CallbackUrlInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeveloperEmailInput`<sup>Optional</sup> <a name="DeveloperEmailInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerEmailInput"></a>

```csharp
public string DeveloperEmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyExpiresInInput`<sup>Optional</sup> <a name="KeyExpiresInInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.keyExpiresInInput"></a>

```csharp
public string KeyExpiresInInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleApigeeDeveloperAppTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a>

---

##### `ApiProducts`<sup>Required</sup> <a name="ApiProducts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.apiProducts"></a>

```csharp
public string[] ApiProducts { get; }
```

- *Type:* string[]

---

##### `AppFamily`<sup>Required</sup> <a name="AppFamily" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appFamily"></a>

```csharp
public string AppFamily { get; }
```

- *Type:* string

---

##### `CallbackUrl`<sup>Required</sup> <a name="CallbackUrl" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.callbackUrl"></a>

```csharp
public string CallbackUrl { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeveloperEmail`<sup>Required</sup> <a name="DeveloperEmail" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerEmail"></a>

```csharp
public string DeveloperEmail { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyExpiresIn`<sup>Required</sup> <a name="KeyExpiresIn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.keyExpiresIn"></a>

```csharp
public string KeyExpiresIn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeDeveloperAppAttributes <a name="GoogleApigeeDeveloperAppAttributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppAttributes {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.property.name">Name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.property.value">Value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#name GoogleApigeeDeveloperApp#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#value GoogleApigeeDeveloperApp#value}

---

### GoogleApigeeDeveloperAppConfig <a name="GoogleApigeeDeveloperAppConfig" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CallbackUrl,
    string DeveloperEmail,
    string Name,
    string OrgId,
    string[] ApiProducts = null,
    string AppFamily = null,
    IResolvable|GoogleApigeeDeveloperAppAttributes[] Attributes = null,
    string DeletionPolicy = null,
    string Id = null,
    string KeyExpiresIn = null,
    string[] Scopes = null,
    string Status = null,
    GoogleApigeeDeveloperAppTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.callbackUrl">CallbackUrl</a></code> | <code>string</code> | Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.developerEmail">DeveloperEmail</a></code> | <code>string</code> | Email address of the developer. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.name">Name</a></code> | <code>string</code> | Name of the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.orgId">OrgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.apiProducts">ApiProducts</a></code> | <code>string[]</code> | List of API products associated with the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.appFamily">AppFamily</a></code> | <code>string</code> | Developer app family. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.attributes">Attributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>[]</code> | attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#id GoogleApigeeDeveloperApp#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.keyExpiresIn">KeyExpiresIn</a></code> | <code>string</code> | Expiration time, in milliseconds, for the consumer key that is generated for the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Scopes to apply to the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.status">Status</a></code> | <code>string</code> | Status of the credential. Valid values include approved or revoked. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CallbackUrl`<sup>Required</sup> <a name="CallbackUrl" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.callbackUrl"></a>

```csharp
public string CallbackUrl { get; set; }
```

- *Type:* string

Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#callback_url GoogleApigeeDeveloperApp#callback_url}

---

##### `DeveloperEmail`<sup>Required</sup> <a name="DeveloperEmail" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.developerEmail"></a>

```csharp
public string DeveloperEmail { get; set; }
```

- *Type:* string

Email address of the developer.

This value is used to uniquely identify the developer in Apigee hybrid.
Note that the email address has to be in lowercase only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#developer_email GoogleApigeeDeveloperApp#developer_email}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#name GoogleApigeeDeveloperApp#name}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#org_id GoogleApigeeDeveloperApp#org_id}

---

##### `ApiProducts`<sup>Optional</sup> <a name="ApiProducts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.apiProducts"></a>

```csharp
public string[] ApiProducts { get; set; }
```

- *Type:* string[]

List of API products associated with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#api_products GoogleApigeeDeveloperApp#api_products}

---

##### `AppFamily`<sup>Optional</sup> <a name="AppFamily" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.appFamily"></a>

```csharp
public string AppFamily { get; set; }
```

- *Type:* string

Developer app family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#app_family GoogleApigeeDeveloperApp#app_family}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.attributes"></a>

```csharp
public IResolvable|GoogleApigeeDeveloperAppAttributes[] Attributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>[]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#attributes GoogleApigeeDeveloperApp#attributes}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#deletion_policy GoogleApigeeDeveloperApp#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#id GoogleApigeeDeveloperApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyExpiresIn`<sup>Optional</sup> <a name="KeyExpiresIn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.keyExpiresIn"></a>

```csharp
public string KeyExpiresIn { get; set; }
```

- *Type:* string

Expiration time, in milliseconds, for the consumer key that is generated for the developer app.

If not set or left to the default value of -1,
the API key never expires. The expiration time can't be updated after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#key_expires_in GoogleApigeeDeveloperApp#key_expires_in}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Scopes to apply to the developer app.

The specified scopes must already exist for the API product that
you associate with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#scopes GoogleApigeeDeveloperApp#scopes}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of the credential. Valid values include approved or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#status GoogleApigeeDeveloperApp#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.timeouts"></a>

```csharp
public GoogleApigeeDeveloperAppTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#timeouts GoogleApigeeDeveloperApp#timeouts}

---

### GoogleApigeeDeveloperAppCredentials <a name="GoogleApigeeDeveloperAppCredentials" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppCredentials {

};
```


### GoogleApigeeDeveloperAppCredentialsApiProducts <a name="GoogleApigeeDeveloperAppCredentialsApiProducts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProducts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProducts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppCredentialsApiProducts {

};
```


### GoogleApigeeDeveloperAppCredentialsAttributes <a name="GoogleApigeeDeveloperAppCredentialsAttributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppCredentialsAttributes {

};
```


### GoogleApigeeDeveloperAppTimeouts <a name="GoogleApigeeDeveloperAppTimeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#create GoogleApigeeDeveloperApp#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#delete GoogleApigeeDeveloperApp#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#update GoogleApigeeDeveloperApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#create GoogleApigeeDeveloperApp#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#delete GoogleApigeeDeveloperApp#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_developer_app#update GoogleApigeeDeveloperApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeDeveloperAppAttributesList <a name="GoogleApigeeDeveloperAppAttributesList" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.get"></a>

```csharp
private GoogleApigeeDeveloperAppAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleApigeeDeveloperAppAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>[]

---


### GoogleApigeeDeveloperAppAttributesOutputReference <a name="GoogleApigeeDeveloperAppAttributesOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleApigeeDeveloperAppAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>

---


### GoogleApigeeDeveloperAppCredentialsApiProductsList <a name="GoogleApigeeDeveloperAppCredentialsApiProductsList" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppCredentialsApiProductsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.get"></a>

```csharp
private GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference <a name="GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.apiproduct">Apiproduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProducts">GoogleApigeeDeveloperAppCredentialsApiProducts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Apiproduct`<sup>Required</sup> <a name="Apiproduct" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.apiproduct"></a>

```csharp
public string Apiproduct { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.internalValue"></a>

```csharp
public GoogleApigeeDeveloperAppCredentialsApiProducts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProducts">GoogleApigeeDeveloperAppCredentialsApiProducts</a>

---


### GoogleApigeeDeveloperAppCredentialsAttributesList <a name="GoogleApigeeDeveloperAppCredentialsAttributesList" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppCredentialsAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.get"></a>

```csharp
private GoogleApigeeDeveloperAppCredentialsAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleApigeeDeveloperAppCredentialsAttributesOutputReference <a name="GoogleApigeeDeveloperAppCredentialsAttributesOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppCredentialsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributes">GoogleApigeeDeveloperAppCredentialsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.internalValue"></a>

```csharp
public GoogleApigeeDeveloperAppCredentialsAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributes">GoogleApigeeDeveloperAppCredentialsAttributes</a>

---


### GoogleApigeeDeveloperAppCredentialsList <a name="GoogleApigeeDeveloperAppCredentialsList" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.get"></a>

```csharp
private GoogleApigeeDeveloperAppCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleApigeeDeveloperAppCredentialsOutputReference <a name="GoogleApigeeDeveloperAppCredentialsOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.apiProducts">ApiProducts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList">GoogleApigeeDeveloperAppCredentialsApiProductsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList">GoogleApigeeDeveloperAppCredentialsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.issuedAt">IssuedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentials">GoogleApigeeDeveloperAppCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiProducts`<sup>Required</sup> <a name="ApiProducts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.apiProducts"></a>

```csharp
public GoogleApigeeDeveloperAppCredentialsApiProductsList ApiProducts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList">GoogleApigeeDeveloperAppCredentialsApiProductsList</a>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.attributes"></a>

```csharp
public GoogleApigeeDeveloperAppCredentialsAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList">GoogleApigeeDeveloperAppCredentialsAttributesList</a>

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; }
```

- *Type:* string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `IssuedAt`<sup>Required</sup> <a name="IssuedAt" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.issuedAt"></a>

```csharp
public string IssuedAt { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.internalValue"></a>

```csharp
public GoogleApigeeDeveloperAppCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentials">GoogleApigeeDeveloperAppCredentials</a>

---


### GoogleApigeeDeveloperAppTimeoutsOutputReference <a name="GoogleApigeeDeveloperAppTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeDeveloperAppTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleApigeeDeveloperAppTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a>

---



