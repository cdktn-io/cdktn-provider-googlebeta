# `googleDesignCenterApplication` Submodule <a name="`googleDesignCenterApplication` Submodule" id="@cdktn/provider-google-beta.googleDesignCenterApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDesignCenterApplication <a name="GoogleDesignCenterApplication" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application google_design_center_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplication(Construct Scope, string Id, GoogleDesignCenterApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig">GoogleDesignCenterApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig">GoogleDesignCenterApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAppParameters">PutAppParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putComponentParameters">PutComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putCompositeApplicationParameters">PutCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putConnectionConfigs">PutConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putDeploymentTarget">PutDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putRolesApisConfig">PutRolesApisConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetAppParameters">ResetAppParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetComponentParameters">ResetComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetCompositeApplicationParameters">ResetCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetConnectionConfigs">ResetConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentProject">ResetDeploymentProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentRegion">ResetDeploymentRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentTarget">ResetDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetRolesApisConfig">ResetRolesApisConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppParameters` <a name="PutAppParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAppParameters"></a>

```csharp
private void PutAppParameters(IResolvable|GoogleDesignCenterApplicationAppParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAppParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>[]

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAttributes"></a>

```csharp
private void PutAttributes(GoogleDesignCenterApplicationAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a>

---

##### `PutComponentParameters` <a name="PutComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putComponentParameters"></a>

```csharp
private void PutComponentParameters(IResolvable|GoogleDesignCenterApplicationComponentParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putComponentParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>[]

---

##### `PutCompositeApplicationParameters` <a name="PutCompositeApplicationParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putCompositeApplicationParameters"></a>

```csharp
private void PutCompositeApplicationParameters(GoogleDesignCenterApplicationCompositeApplicationParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putCompositeApplicationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a>

---

##### `PutConnectionConfigs` <a name="PutConnectionConfigs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putConnectionConfigs"></a>

```csharp
private void PutConnectionConfigs(IResolvable|GoogleDesignCenterApplicationConnectionConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putConnectionConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>[]

---

##### `PutDeploymentTarget` <a name="PutDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putDeploymentTarget"></a>

```csharp
private void PutDeploymentTarget(GoogleDesignCenterApplicationDeploymentTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putDeploymentTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a>

---

##### `PutRolesApisConfig` <a name="PutRolesApisConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putRolesApisConfig"></a>

```csharp
private void PutRolesApisConfig(IResolvable|GoogleDesignCenterApplicationRolesApisConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putRolesApisConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>[]

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putScope"></a>

```csharp
private void PutScope(GoogleDesignCenterApplicationScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putSource"></a>

```csharp
private void PutSource(GoogleDesignCenterApplicationSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDesignCenterApplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a>

---

##### `ResetAppParameters` <a name="ResetAppParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetAppParameters"></a>

```csharp
private void ResetAppParameters()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetComponentParameters` <a name="ResetComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetComponentParameters"></a>

```csharp
private void ResetComponentParameters()
```

##### `ResetCompositeApplicationParameters` <a name="ResetCompositeApplicationParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetCompositeApplicationParameters"></a>

```csharp
private void ResetCompositeApplicationParameters()
```

##### `ResetConnectionConfigs` <a name="ResetConnectionConfigs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetConnectionConfigs"></a>

```csharp
private void ResetConnectionConfigs()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDeploymentProject` <a name="ResetDeploymentProject" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentProject"></a>

```csharp
private void ResetDeploymentProject()
```

##### `ResetDeploymentRegion` <a name="ResetDeploymentRegion" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentRegion"></a>

```csharp
private void ResetDeploymentRegion()
```

##### `ResetDeploymentTarget` <a name="ResetDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDeploymentTarget"></a>

```csharp
private void ResetDeploymentTarget()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRolesApisConfig` <a name="ResetRolesApisConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetRolesApisConfig"></a>

```csharp
private void ResetRolesApisConfig()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDesignCenterApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDesignCenterApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDesignCenterApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDesignCenterApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDesignCenterApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDesignCenterApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDesignCenterApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDesignCenterApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDesignCenterApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.apphubApplication">ApphubApplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.appParameters">AppParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList">GoogleDesignCenterApplicationAppParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference">GoogleDesignCenterApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.componentParameters">ComponentParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList">GoogleDesignCenterApplicationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.compositeApplicationParameters">CompositeApplicationParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference">GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connectionConfigs">ConnectionConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList">GoogleDesignCenterApplicationConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentMetadata">DeploymentMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList">GoogleDesignCenterApplicationDeploymentMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentTarget">DeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference">GoogleDesignCenterApplicationDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.rolesApisConfig">RolesApisConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList">GoogleDesignCenterApplicationRolesApisConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference">GoogleDesignCenterApplicationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.source">Source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference">GoogleDesignCenterApplicationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference">GoogleDesignCenterApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.appParametersInput">AppParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.attributesInput">AttributesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.componentParametersInput">ComponentParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.compositeApplicationParametersInput">CompositeApplicationParametersInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connectionConfigsInput">ConnectionConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentProjectInput">DeploymentProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentRegionInput">DeploymentRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentTargetInput">DeploymentTargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.rolesApisConfigInput">RolesApisConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.spaceInput">SpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentProject">DeploymentProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentRegion">DeploymentRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.space">Space</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApphubApplication`<sup>Required</sup> <a name="ApphubApplication" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.apphubApplication"></a>

```csharp
public string ApphubApplication { get; }
```

- *Type:* string

---

##### `AppParameters`<sup>Required</sup> <a name="AppParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.appParameters"></a>

```csharp
public GoogleDesignCenterApplicationAppParametersList AppParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList">GoogleDesignCenterApplicationAppParametersList</a>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.attributes"></a>

```csharp
public GoogleDesignCenterApplicationAttributesOutputReference Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference">GoogleDesignCenterApplicationAttributesOutputReference</a>

---

##### `ComponentParameters`<sup>Required</sup> <a name="ComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.componentParameters"></a>

```csharp
public GoogleDesignCenterApplicationComponentParametersList ComponentParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList">GoogleDesignCenterApplicationComponentParametersList</a>

---

##### `CompositeApplicationParameters`<sup>Required</sup> <a name="CompositeApplicationParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.compositeApplicationParameters"></a>

```csharp
public GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference CompositeApplicationParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference">GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference</a>

---

##### `ConnectionConfigs`<sup>Required</sup> <a name="ConnectionConfigs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connectionConfigs"></a>

```csharp
public GoogleDesignCenterApplicationConnectionConfigsList ConnectionConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList">GoogleDesignCenterApplicationConnectionConfigsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeploymentMetadata`<sup>Required</sup> <a name="DeploymentMetadata" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentMetadata"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentMetadataList DeploymentMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList">GoogleDesignCenterApplicationDeploymentMetadataList</a>

---

##### `DeploymentTarget`<sup>Required</sup> <a name="DeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentTarget"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentTargetOutputReference DeploymentTarget { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference">GoogleDesignCenterApplicationDeploymentTargetOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RolesApisConfig`<sup>Required</sup> <a name="RolesApisConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.rolesApisConfig"></a>

```csharp
public GoogleDesignCenterApplicationRolesApisConfigList RolesApisConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList">GoogleDesignCenterApplicationRolesApisConfigList</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.scope"></a>

```csharp
public GoogleDesignCenterApplicationScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference">GoogleDesignCenterApplicationScopeOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.source"></a>

```csharp
public GoogleDesignCenterApplicationSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference">GoogleDesignCenterApplicationSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.timeouts"></a>

```csharp
public GoogleDesignCenterApplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference">GoogleDesignCenterApplicationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `AppParametersInput`<sup>Optional</sup> <a name="AppParametersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.appParametersInput"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAppParameters[] AppParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.attributesInput"></a>

```csharp
public GoogleDesignCenterApplicationAttributes AttributesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a>

---

##### `ComponentParametersInput`<sup>Optional</sup> <a name="ComponentParametersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.componentParametersInput"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationComponentParameters[] ComponentParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>[]

---

##### `CompositeApplicationParametersInput`<sup>Optional</sup> <a name="CompositeApplicationParametersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.compositeApplicationParametersInput"></a>

```csharp
public GoogleDesignCenterApplicationCompositeApplicationParameters CompositeApplicationParametersInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a>

---

##### `ConnectionConfigsInput`<sup>Optional</sup> <a name="ConnectionConfigsInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.connectionConfigsInput"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationConnectionConfigs[] ConnectionConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>[]

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeploymentProjectInput`<sup>Optional</sup> <a name="DeploymentProjectInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentProjectInput"></a>

```csharp
public string DeploymentProjectInput { get; }
```

- *Type:* string

---

##### `DeploymentRegionInput`<sup>Optional</sup> <a name="DeploymentRegionInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentRegionInput"></a>

```csharp
public string DeploymentRegionInput { get; }
```

- *Type:* string

---

##### `DeploymentTargetInput`<sup>Optional</sup> <a name="DeploymentTargetInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentTargetInput"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentTarget DeploymentTargetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RolesApisConfigInput`<sup>Optional</sup> <a name="RolesApisConfigInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.rolesApisConfigInput"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationRolesApisConfig[] RolesApisConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.scopeInput"></a>

```csharp
public GoogleDesignCenterApplicationScope ScopeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.sourceInput"></a>

```csharp
public GoogleDesignCenterApplicationSource SourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a>

---

##### `SpaceInput`<sup>Optional</sup> <a name="SpaceInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.spaceInput"></a>

```csharp
public string SpaceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a>

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeploymentProject`<sup>Required</sup> <a name="DeploymentProject" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentProject"></a>

```csharp
public string DeploymentProject { get; }
```

- *Type:* string

---

##### `DeploymentRegion`<sup>Required</sup> <a name="DeploymentRegion" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.deploymentRegion"></a>

```csharp
public string DeploymentRegion { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.space"></a>

```csharp
public string Space { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDesignCenterApplicationAppParameters <a name="GoogleDesignCenterApplicationAppParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAppParameters {
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.property.key">Key</a></code> | <code>string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.property.value">Value</a></code> | <code>string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}

---

### GoogleDesignCenterApplicationAttributes <a name="GoogleDesignCenterApplicationAttributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributes {
    IResolvable|GoogleDesignCenterApplicationAttributesBusinessOwners[] BusinessOwners = null,
    GoogleDesignCenterApplicationAttributesCriticality Criticality = null,
    IResolvable|GoogleDesignCenterApplicationAttributesDeveloperOwners[] DeveloperOwners = null,
    GoogleDesignCenterApplicationAttributesEnvironment Environment = null,
    IResolvable|GoogleDesignCenterApplicationAttributesOperatorOwners[] OperatorOwners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.businessOwners">BusinessOwners</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>[]</code> | business_owners block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.criticality">Criticality</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.developerOwners">DeveloperOwners</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>[]</code> | developer_owners block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.operatorOwners">OperatorOwners</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>[]</code> | operator_owners block. |

---

##### `BusinessOwners`<sup>Optional</sup> <a name="BusinessOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.businessOwners"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAttributesBusinessOwners[] BusinessOwners { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>[]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#business_owners GoogleDesignCenterApplication#business_owners}

---

##### `Criticality`<sup>Optional</sup> <a name="Criticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.criticality"></a>

```csharp
public GoogleDesignCenterApplicationAttributesCriticality Criticality { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#criticality GoogleDesignCenterApplication#criticality}

---

##### `DeveloperOwners`<sup>Optional</sup> <a name="DeveloperOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.developerOwners"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAttributesDeveloperOwners[] DeveloperOwners { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>[]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#developer_owners GoogleDesignCenterApplication#developer_owners}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.environment"></a>

```csharp
public GoogleDesignCenterApplicationAttributesEnvironment Environment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#environment GoogleDesignCenterApplication#environment}

---

##### `OperatorOwners`<sup>Optional</sup> <a name="OperatorOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes.property.operatorOwners"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAttributesOperatorOwners[] OperatorOwners { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>[]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#operator_owners GoogleDesignCenterApplication#operator_owners}

---

### GoogleDesignCenterApplicationAttributesBusinessOwners <a name="GoogleDesignCenterApplicationAttributesBusinessOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesBusinessOwners {
    string Email,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.property.email">Email</a></code> | <code>string</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.property.displayName">DisplayName</a></code> | <code>string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#email GoogleDesignCenterApplication#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

### GoogleDesignCenterApplicationAttributesCriticality <a name="GoogleDesignCenterApplicationAttributesCriticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesCriticality {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality.property.type">Type</a></code> | <code>string</code> | Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}

---

### GoogleDesignCenterApplicationAttributesDeveloperOwners <a name="GoogleDesignCenterApplicationAttributesDeveloperOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesDeveloperOwners {
    string Email,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.property.email">Email</a></code> | <code>string</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.property.displayName">DisplayName</a></code> | <code>string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#email GoogleDesignCenterApplication#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

### GoogleDesignCenterApplicationAttributesEnvironment <a name="GoogleDesignCenterApplicationAttributesEnvironment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesEnvironment {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment.property.type">Type</a></code> | <code>string</code> | Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}

---

### GoogleDesignCenterApplicationAttributesOperatorOwners <a name="GoogleDesignCenterApplicationAttributesOperatorOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesOperatorOwners {
    string Email,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.property.email">Email</a></code> | <code>string</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.property.displayName">DisplayName</a></code> | <code>string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#email GoogleDesignCenterApplication#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

### GoogleDesignCenterApplicationComponentParameters <a name="GoogleDesignCenterApplicationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationComponentParameters {
    string Component,
    IResolvable|GoogleDesignCenterApplicationComponentParametersParameters[] Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.property.component">Component</a></code> | <code>string</code> | The URI of the component that the parameters belong to. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>[]</code> | parameters block. |

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.property.component"></a>

```csharp
public string Component { get; set; }
```

- *Type:* string

The URI of the component that the parameters belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#component GoogleDesignCenterApplication#component}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters.property.parameters"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationComponentParametersParameters[] Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#parameters GoogleDesignCenterApplication#parameters}

---

### GoogleDesignCenterApplicationComponentParametersParameters <a name="GoogleDesignCenterApplicationComponentParametersParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationComponentParametersParameters {
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.property.key">Key</a></code> | <code>string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.property.value">Value</a></code> | <code>string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}

---

### GoogleDesignCenterApplicationCompositeApplicationParameters <a name="GoogleDesignCenterApplicationCompositeApplicationParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationCompositeApplicationParameters {
    System.Collections.Generic.IDictionary<string, string> ServiceAccountMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap">ServiceAccountMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map from a component URI to the service account that deploys the component. |

---

##### `ServiceAccountMap`<sup>Optional</sup> <a name="ServiceAccountMap" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAccountMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map from a component URI to the service account that deploys the component.

Keys use the format
'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}'
and values use the format
'projects/{project}/serviceAccounts/{email_address}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#service_account_map GoogleDesignCenterApplication#service_account_map}

---

### GoogleDesignCenterApplicationConfig <a name="GoogleDesignCenterApplicationConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationId,
    string Location,
    GoogleDesignCenterApplicationScope Scope,
    GoogleDesignCenterApplicationSource Source,
    string Space,
    IResolvable|GoogleDesignCenterApplicationAppParameters[] AppParameters = null,
    GoogleDesignCenterApplicationAttributes Attributes = null,
    IResolvable|GoogleDesignCenterApplicationComponentParameters[] ComponentParameters = null,
    GoogleDesignCenterApplicationCompositeApplicationParameters CompositeApplicationParameters = null,
    IResolvable|GoogleDesignCenterApplicationConnectionConfigs[] ConnectionConfigs = null,
    string DeletionPolicy = null,
    string DeploymentProject = null,
    string DeploymentRegion = null,
    GoogleDesignCenterApplicationDeploymentTarget DeploymentTarget = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    IResolvable|GoogleDesignCenterApplicationRolesApisConfig[] RolesApisConfig = null,
    string ServiceAccount = null,
    GoogleDesignCenterApplicationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | The ID of the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.location">Location</a></code> | <code>string</code> | The location of the space. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.space">Space</a></code> | <code>string</code> | The space for the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.appParameters">AppParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>[]</code> | app_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.componentParameters">ComponentParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>[]</code> | component_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.compositeApplicationParameters">CompositeApplicationParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a></code> | composite_application_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.connectionConfigs">ConnectionConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>[]</code> | connection_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentProject">DeploymentProject</a></code> | <code>string</code> | Deployment project. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentRegion">DeploymentRegion</a></code> | <code>string</code> | Deployment region. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentTarget">DeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a></code> | deployment_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.description">Description</a></code> | <code>string</code> | Description of the application. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#id GoogleDesignCenterApplication#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project GoogleDesignCenterApplication#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.rolesApisConfig">RolesApisConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>[]</code> | roles_apis_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Service account for deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#application_id GoogleDesignCenterApplication#application_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#location GoogleDesignCenterApplication#location}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.scope"></a>

```csharp
public GoogleDesignCenterApplicationScope Scope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#scope GoogleDesignCenterApplication#scope}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.source"></a>

```csharp
public GoogleDesignCenterApplicationSource Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#source GoogleDesignCenterApplication#source}

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.space"></a>

```csharp
public string Space { get; set; }
```

- *Type:* string

The space for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#space GoogleDesignCenterApplication#space}

---

##### `AppParameters`<sup>Optional</sup> <a name="AppParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.appParameters"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAppParameters[] AppParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>[]

app_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#app_parameters GoogleDesignCenterApplication#app_parameters}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.attributes"></a>

```csharp
public GoogleDesignCenterApplicationAttributes Attributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#attributes GoogleDesignCenterApplication#attributes}

---

##### `ComponentParameters`<sup>Optional</sup> <a name="ComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.componentParameters"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationComponentParameters[] ComponentParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>[]

component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#component_parameters GoogleDesignCenterApplication#component_parameters}

---

##### `CompositeApplicationParameters`<sup>Optional</sup> <a name="CompositeApplicationParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.compositeApplicationParameters"></a>

```csharp
public GoogleDesignCenterApplicationCompositeApplicationParameters CompositeApplicationParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a>

composite_application_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#composite_application_parameters GoogleDesignCenterApplication#composite_application_parameters}

---

##### `ConnectionConfigs`<sup>Optional</sup> <a name="ConnectionConfigs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.connectionConfigs"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationConnectionConfigs[] ConnectionConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>[]

connection_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#connection_configs GoogleDesignCenterApplication#connection_configs}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deletion_policy GoogleDesignCenterApplication#deletion_policy}

---

##### `DeploymentProject`<sup>Optional</sup> <a name="DeploymentProject" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentProject"></a>

```csharp
public string DeploymentProject { get; set; }
```

- *Type:* string

Deployment project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_project GoogleDesignCenterApplication#deployment_project}

---

##### `DeploymentRegion`<sup>Optional</sup> <a name="DeploymentRegion" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentRegion"></a>

```csharp
public string DeploymentRegion { get; set; }
```

- *Type:* string

Deployment region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_region GoogleDesignCenterApplication#deployment_region}

---

##### `DeploymentTarget`<sup>Optional</sup> <a name="DeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.deploymentTarget"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentTarget DeploymentTarget { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a>

deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_target GoogleDesignCenterApplication#deployment_target}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#description GoogleDesignCenterApplication#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#id GoogleDesignCenterApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project GoogleDesignCenterApplication#project}.

---

##### `RolesApisConfig`<sup>Optional</sup> <a name="RolesApisConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.rolesApisConfig"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationRolesApisConfig[] RolesApisConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>[]

roles_apis_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#roles_apis_config GoogleDesignCenterApplication#roles_apis_config}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Service account for deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#service_account GoogleDesignCenterApplication#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConfig.property.timeouts"></a>

```csharp
public GoogleDesignCenterApplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#timeouts GoogleDesignCenterApplication#timeouts}

---

### GoogleDesignCenterApplicationConnectionConfigs <a name="GoogleDesignCenterApplicationConnectionConfigs" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationConnectionConfigs {
    string ConnectionUri,
    IResolvable|GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters[] DestinationComponentParameters = null,
    IResolvable|GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters[] SourceComponentParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.connectionUri">ConnectionUri</a></code> | <code>string</code> | The URI of the connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.destinationComponentParameters">DestinationComponentParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]</code> | destination_component_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.sourceComponentParameters">SourceComponentParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]</code> | source_component_parameters block. |

---

##### `ConnectionUri`<sup>Required</sup> <a name="ConnectionUri" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.connectionUri"></a>

```csharp
public string ConnectionUri { get; set; }
```

- *Type:* string

The URI of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#connection_uri GoogleDesignCenterApplication#connection_uri}

---

##### `DestinationComponentParameters`<sup>Optional</sup> <a name="DestinationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.destinationComponentParameters"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters[] DestinationComponentParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]

destination_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#destination_component_parameters GoogleDesignCenterApplication#destination_component_parameters}

---

##### `SourceComponentParameters`<sup>Optional</sup> <a name="SourceComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs.property.sourceComponentParameters"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters[] SourceComponentParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]

source_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#source_component_parameters GoogleDesignCenterApplication#source_component_parameters}

---

### GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters <a name="GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters {
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key">Key</a></code> | <code>string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value">Value</a></code> | <code>string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}

---

### GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters <a name="GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters {
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key">Key</a></code> | <code>string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value">Value</a></code> | <code>string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}

---

### GoogleDesignCenterApplicationDeploymentMetadata <a name="GoogleDesignCenterApplicationDeploymentMetadata" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentMetadata {

};
```


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters {

};
```


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters {

};
```


### GoogleDesignCenterApplicationDeploymentMetadataError <a name="GoogleDesignCenterApplicationDeploymentMetadataError" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentMetadataError {

};
```


### GoogleDesignCenterApplicationDeploymentTarget <a name="GoogleDesignCenterApplicationDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentTarget {
    GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget GkeDeploymentTarget = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget">GkeDeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | gke_deployment_target block. |

---

##### `GkeDeploymentTarget`<sup>Optional</sup> <a name="GkeDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget GkeDeploymentTarget { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

gke_deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#gke_deployment_target GoogleDesignCenterApplication#gke_deployment_target}

---

### GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget <a name="GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget {
    string ClusterSelfLink,
    string KubernetesServiceAccount,
    string Namespace,
    bool|IResolvable KubernetesServiceAccountCreation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink">ClusterSelfLink</a></code> | <code>string</code> | The self link of the cluster where the GKE based application is deployed. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount">KubernetesServiceAccount</a></code> | <code>string</code> | The Kubernetes service account in the namespace, such as 'default'. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace">Namespace</a></code> | <code>string</code> | The namespace where the application is deployed. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation">KubernetesServiceAccountCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to create the Kubernetes service account. |

---

##### `ClusterSelfLink`<sup>Required</sup> <a name="ClusterSelfLink" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink"></a>

```csharp
public string ClusterSelfLink { get; set; }
```

- *Type:* string

The self link of the cluster where the GKE based application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#cluster_self_link GoogleDesignCenterApplication#cluster_self_link}

---

##### `KubernetesServiceAccount`<sup>Required</sup> <a name="KubernetesServiceAccount" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount"></a>

```csharp
public string KubernetesServiceAccount { get; set; }
```

- *Type:* string

The Kubernetes service account in the namespace, such as 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#kubernetes_service_account GoogleDesignCenterApplication#kubernetes_service_account}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace where the application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#namespace GoogleDesignCenterApplication#namespace}

---

##### `KubernetesServiceAccountCreation`<sup>Optional</sup> <a name="KubernetesServiceAccountCreation" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation"></a>

```csharp
public bool|IResolvable KubernetesServiceAccountCreation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to create the Kubernetes service account.

If 'true', the
service account is created in the namespace. If 'false', the
service account must already exist in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#kubernetes_service_account_creation GoogleDesignCenterApplication#kubernetes_service_account_creation}

---

### GoogleDesignCenterApplicationRolesApisConfig <a name="GoogleDesignCenterApplicationRolesApisConfig" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationRolesApisConfig {
    string ProjectId,
    IResolvable|GoogleDesignCenterApplicationRolesApisConfigApis[] Apis = null,
    IResolvable|GoogleDesignCenterApplicationRolesApisConfigRoles[] Roles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The project ID to which these configurations apply. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.apis">Apis</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>[]</code> | apis block. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.roles">Roles</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>[]</code> | roles block. |

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project ID to which these configurations apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project_id GoogleDesignCenterApplication#project_id}

---

##### `Apis`<sup>Optional</sup> <a name="Apis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.apis"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationRolesApisConfigApis[] Apis { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>[]

apis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#apis GoogleDesignCenterApplication#apis}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig.property.roles"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationRolesApisConfigRoles[] Roles { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>[]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#roles GoogleDesignCenterApplication#roles}

---

### GoogleDesignCenterApplicationRolesApisConfigApis <a name="GoogleDesignCenterApplicationRolesApisConfigApis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationRolesApisConfigApis {
    string Api
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis.property.api">Api</a></code> | <code>string</code> | API name, such as 'compute.googleapis.com'. |

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis.property.api"></a>

```csharp
public string Api { get; set; }
```

- *Type:* string

API name, such as 'compute.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#api GoogleDesignCenterApplication#api}

---

### GoogleDesignCenterApplicationRolesApisConfigRoles <a name="GoogleDesignCenterApplicationRolesApisConfigRoles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationRolesApisConfigRoles {
    string Role
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles.property.role">Role</a></code> | <code>string</code> | IAM role name, such as 'roles/editor'. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

IAM role name, such as 'roles/editor'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#role GoogleDesignCenterApplication#role}

---

### GoogleDesignCenterApplicationScope <a name="GoogleDesignCenterApplicationScope" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationScope {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope.property.type">Type</a></code> | <code>string</code> | Scope type. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Scope type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}

---

### GoogleDesignCenterApplicationSource <a name="GoogleDesignCenterApplicationSource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationSource {
    string ApplicationTemplateRevision = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource.property.applicationTemplateRevision">ApplicationTemplateRevision</a></code> | <code>string</code> | Application template revision URI. |

---

##### `ApplicationTemplateRevision`<sup>Optional</sup> <a name="ApplicationTemplateRevision" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource.property.applicationTemplateRevision"></a>

```csharp
public string ApplicationTemplateRevision { get; set; }
```

- *Type:* string

Application template revision URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#application_template_revision GoogleDesignCenterApplication#application_template_revision}

---

### GoogleDesignCenterApplicationTimeouts <a name="GoogleDesignCenterApplicationTimeouts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#create GoogleDesignCenterApplication#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#delete GoogleDesignCenterApplication#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#update GoogleDesignCenterApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#create GoogleDesignCenterApplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#delete GoogleDesignCenterApplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#update GoogleDesignCenterApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDesignCenterApplicationAppParametersList <a name="GoogleDesignCenterApplicationAppParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAppParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.get"></a>

```csharp
private GoogleDesignCenterApplicationAppParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAppParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>[]

---


### GoogleDesignCenterApplicationAppParametersOutputReference <a name="GoogleDesignCenterApplicationAppParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAppParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAppParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAppParameters">GoogleDesignCenterApplicationAppParameters</a>

---


### GoogleDesignCenterApplicationAttributesBusinessOwnersList <a name="GoogleDesignCenterApplicationAttributesBusinessOwnersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesBusinessOwnersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.get"></a>

```csharp
private GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAttributesBusinessOwners[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>[]

---


### GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference <a name="GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAttributesBusinessOwners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>

---


### GoogleDesignCenterApplicationAttributesCriticalityOutputReference <a name="GoogleDesignCenterApplicationAttributesCriticalityOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesCriticalityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue"></a>

```csharp
public GoogleDesignCenterApplicationAttributesCriticality InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a>

---


### GoogleDesignCenterApplicationAttributesDeveloperOwnersList <a name="GoogleDesignCenterApplicationAttributesDeveloperOwnersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesDeveloperOwnersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.get"></a>

```csharp
private GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAttributesDeveloperOwners[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>[]

---


### GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference <a name="GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAttributesDeveloperOwners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>

---


### GoogleDesignCenterApplicationAttributesEnvironmentOutputReference <a name="GoogleDesignCenterApplicationAttributesEnvironmentOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue"></a>

```csharp
public GoogleDesignCenterApplicationAttributesEnvironment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a>

---


### GoogleDesignCenterApplicationAttributesOperatorOwnersList <a name="GoogleDesignCenterApplicationAttributesOperatorOwnersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesOperatorOwnersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.get"></a>

```csharp
private GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAttributesOperatorOwners[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>[]

---


### GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference <a name="GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAttributesOperatorOwners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>

---


### GoogleDesignCenterApplicationAttributesOutputReference <a name="GoogleDesignCenterApplicationAttributesOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putBusinessOwners">PutBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putCriticality">PutCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putDeveloperOwners">PutDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putOperatorOwners">PutOperatorOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetBusinessOwners">ResetBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetCriticality">ResetCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetDeveloperOwners">ResetDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetOperatorOwners">ResetOperatorOwners</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBusinessOwners` <a name="PutBusinessOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putBusinessOwners"></a>

```csharp
private void PutBusinessOwners(IResolvable|GoogleDesignCenterApplicationAttributesBusinessOwners[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>[]

---

##### `PutCriticality` <a name="PutCriticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putCriticality"></a>

```csharp
private void PutCriticality(GoogleDesignCenterApplicationAttributesCriticality Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putCriticality.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a>

---

##### `PutDeveloperOwners` <a name="PutDeveloperOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putDeveloperOwners"></a>

```csharp
private void PutDeveloperOwners(IResolvable|GoogleDesignCenterApplicationAttributesDeveloperOwners[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>[]

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putEnvironment"></a>

```csharp
private void PutEnvironment(GoogleDesignCenterApplicationAttributesEnvironment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a>

---

##### `PutOperatorOwners` <a name="PutOperatorOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putOperatorOwners"></a>

```csharp
private void PutOperatorOwners(IResolvable|GoogleDesignCenterApplicationAttributesOperatorOwners[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>[]

---

##### `ResetBusinessOwners` <a name="ResetBusinessOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetBusinessOwners"></a>

```csharp
private void ResetBusinessOwners()
```

##### `ResetCriticality` <a name="ResetCriticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetCriticality"></a>

```csharp
private void ResetCriticality()
```

##### `ResetDeveloperOwners` <a name="ResetDeveloperOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetDeveloperOwners"></a>

```csharp
private void ResetDeveloperOwners()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetOperatorOwners` <a name="ResetOperatorOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.resetOperatorOwners"></a>

```csharp
private void ResetOperatorOwners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.businessOwners">BusinessOwners</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList">GoogleDesignCenterApplicationAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.criticality">Criticality</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference">GoogleDesignCenterApplicationAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.developerOwners">DeveloperOwners</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList">GoogleDesignCenterApplicationAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference">GoogleDesignCenterApplicationAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.operatorOwners">OperatorOwners</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList">GoogleDesignCenterApplicationAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.businessOwnersInput">BusinessOwnersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.criticalityInput">CriticalityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.developerOwnersInput">DeveloperOwnersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput">OperatorOwnersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BusinessOwners`<sup>Required</sup> <a name="BusinessOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.businessOwners"></a>

```csharp
public GoogleDesignCenterApplicationAttributesBusinessOwnersList BusinessOwners { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwnersList">GoogleDesignCenterApplicationAttributesBusinessOwnersList</a>

---

##### `Criticality`<sup>Required</sup> <a name="Criticality" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.criticality"></a>

```csharp
public GoogleDesignCenterApplicationAttributesCriticalityOutputReference Criticality { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticalityOutputReference">GoogleDesignCenterApplicationAttributesCriticalityOutputReference</a>

---

##### `DeveloperOwners`<sup>Required</sup> <a name="DeveloperOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.developerOwners"></a>

```csharp
public GoogleDesignCenterApplicationAttributesDeveloperOwnersList DeveloperOwners { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwnersList">GoogleDesignCenterApplicationAttributesDeveloperOwnersList</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.environment"></a>

```csharp
public GoogleDesignCenterApplicationAttributesEnvironmentOutputReference Environment { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironmentOutputReference">GoogleDesignCenterApplicationAttributesEnvironmentOutputReference</a>

---

##### `OperatorOwners`<sup>Required</sup> <a name="OperatorOwners" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.operatorOwners"></a>

```csharp
public GoogleDesignCenterApplicationAttributesOperatorOwnersList OperatorOwners { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwnersList">GoogleDesignCenterApplicationAttributesOperatorOwnersList</a>

---

##### `BusinessOwnersInput`<sup>Optional</sup> <a name="BusinessOwnersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.businessOwnersInput"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAttributesBusinessOwners[] BusinessOwnersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesBusinessOwners">GoogleDesignCenterApplicationAttributesBusinessOwners</a>[]

---

##### `CriticalityInput`<sup>Optional</sup> <a name="CriticalityInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.criticalityInput"></a>

```csharp
public GoogleDesignCenterApplicationAttributesCriticality CriticalityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesCriticality">GoogleDesignCenterApplicationAttributesCriticality</a>

---

##### `DeveloperOwnersInput`<sup>Optional</sup> <a name="DeveloperOwnersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.developerOwnersInput"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAttributesDeveloperOwners[] DeveloperOwnersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesDeveloperOwners">GoogleDesignCenterApplicationAttributesDeveloperOwners</a>[]

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.environmentInput"></a>

```csharp
public GoogleDesignCenterApplicationAttributesEnvironment EnvironmentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesEnvironment">GoogleDesignCenterApplicationAttributesEnvironment</a>

---

##### `OperatorOwnersInput`<sup>Optional</sup> <a name="OperatorOwnersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationAttributesOperatorOwners[] OperatorOwnersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOperatorOwners">GoogleDesignCenterApplicationAttributesOperatorOwners</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributesOutputReference.property.internalValue"></a>

```csharp
public GoogleDesignCenterApplicationAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationAttributes">GoogleDesignCenterApplicationAttributes</a>

---


### GoogleDesignCenterApplicationComponentParametersList <a name="GoogleDesignCenterApplicationComponentParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationComponentParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.get"></a>

```csharp
private GoogleDesignCenterApplicationComponentParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationComponentParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>[]

---


### GoogleDesignCenterApplicationComponentParametersOutputReference <a name="GoogleDesignCenterApplicationComponentParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationComponentParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.putParameters"></a>

```csharp
private void PutParameters(IResolvable|GoogleDesignCenterApplicationComponentParametersParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>[]

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList">GoogleDesignCenterApplicationComponentParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.componentInput">ComponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.component">Component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.parameters"></a>

```csharp
public GoogleDesignCenterApplicationComponentParametersParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList">GoogleDesignCenterApplicationComponentParametersParametersList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ComponentInput`<sup>Optional</sup> <a name="ComponentInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.componentInput"></a>

```csharp
public string ComponentInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.parametersInput"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationComponentParametersParameters[] ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>[]

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.component"></a>

```csharp
public string Component { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationComponentParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParameters">GoogleDesignCenterApplicationComponentParameters</a>

---


### GoogleDesignCenterApplicationComponentParametersParametersList <a name="GoogleDesignCenterApplicationComponentParametersParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationComponentParametersParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.get"></a>

```csharp
private GoogleDesignCenterApplicationComponentParametersParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationComponentParametersParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>[]

---


### GoogleDesignCenterApplicationComponentParametersParametersOutputReference <a name="GoogleDesignCenterApplicationComponentParametersParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationComponentParametersParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationComponentParametersParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationComponentParametersParameters">GoogleDesignCenterApplicationComponentParametersParameters</a>

---


### GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference <a name="GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap">ResetServiceAccountMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAccountMap` <a name="ResetServiceAccountMap" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap"></a>

```csharp
private void ResetServiceAccountMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput">ServiceAccountMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap">ServiceAccountMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAccountMapInput`<sup>Optional</sup> <a name="ServiceAccountMapInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAccountMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServiceAccountMap`<sup>Required</sup> <a name="ServiceAccountMap" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAccountMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue"></a>

```csharp
public GoogleDesignCenterApplicationCompositeApplicationParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationCompositeApplicationParameters">GoogleDesignCenterApplicationCompositeApplicationParameters</a>

---


### GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList <a name="GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get"></a>

```csharp
private GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]

---


### GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference <a name="GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>

---


### GoogleDesignCenterApplicationConnectionConfigsList <a name="GoogleDesignCenterApplicationConnectionConfigsList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationConnectionConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.get"></a>

```csharp
private GoogleDesignCenterApplicationConnectionConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationConnectionConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>[]

---


### GoogleDesignCenterApplicationConnectionConfigsOutputReference <a name="GoogleDesignCenterApplicationConnectionConfigsOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationConnectionConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters">PutDestinationComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters">PutSourceComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters">ResetDestinationComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters">ResetSourceComponentParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationComponentParameters` <a name="PutDestinationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters"></a>

```csharp
private void PutDestinationComponentParameters(IResolvable|GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]

---

##### `PutSourceComponentParameters` <a name="PutSourceComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters"></a>

```csharp
private void PutSourceComponentParameters(IResolvable|GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]

---

##### `ResetDestinationComponentParameters` <a name="ResetDestinationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters"></a>

```csharp
private void ResetDestinationComponentParameters()
```

##### `ResetSourceComponentParameters` <a name="ResetSourceComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters"></a>

```csharp
private void ResetSourceComponentParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters">DestinationComponentParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters">SourceComponentParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput">ConnectionUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput">DestinationComponentParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput">SourceComponentParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri">ConnectionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationComponentParameters`<sup>Required</sup> <a name="DestinationComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters"></a>

```csharp
public GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList DestinationComponentParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a>

---

##### `SourceComponentParameters`<sup>Required</sup> <a name="SourceComponentParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters"></a>

```csharp
public GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList SourceComponentParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList</a>

---

##### `ConnectionUriInput`<sup>Optional</sup> <a name="ConnectionUriInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput"></a>

```csharp
public string ConnectionUriInput { get; }
```

- *Type:* string

---

##### `DestinationComponentParametersInput`<sup>Optional</sup> <a name="DestinationComponentParametersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters[] DestinationComponentParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters">GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]

---

##### `SourceComponentParametersInput`<sup>Optional</sup> <a name="SourceComponentParametersInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters[] SourceComponentParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]

---

##### `ConnectionUri`<sup>Required</sup> <a name="ConnectionUri" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri"></a>

```csharp
public string ConnectionUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationConnectionConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigs">GoogleDesignCenterApplicationConnectionConfigs</a>

---


### GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList <a name="GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.get"></a>

```csharp
private GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]

---


### GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference <a name="GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters">GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters</a>

---


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get"></a>

```csharp
private GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component">Component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component"></a>

```csharp
public string Component { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters</a>

---


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get"></a>

```csharp
private GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference <a name="GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a>

---


### GoogleDesignCenterApplicationDeploymentMetadataErrorList <a name="GoogleDesignCenterApplicationDeploymentMetadataErrorList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentMetadataErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.get"></a>

```csharp
private GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference <a name="GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail">Detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataError">GoogleDesignCenterApplicationDeploymentMetadataError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail"></a>

```csharp
public string Detail { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentMetadataError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataError">GoogleDesignCenterApplicationDeploymentMetadataError</a>

---


### GoogleDesignCenterApplicationDeploymentMetadataList <a name="GoogleDesignCenterApplicationDeploymentMetadataList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.get"></a>

```csharp
private GoogleDesignCenterApplicationDeploymentMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDesignCenterApplicationDeploymentMetadataOutputReference <a name="GoogleDesignCenterApplicationDeploymentMetadataOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters">ComponentOutputParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList">GoogleDesignCenterApplicationDeploymentMetadataErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts">RetryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool">WorkerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadata">GoogleDesignCenterApplicationDeploymentMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute"></a>

```csharp
public string BuildAttribute { get; }
```

- *Type:* string

---

##### `ComponentOutputParameters`<sup>Required</sup> <a name="ComponentOutputParameters" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList ComponentOutputParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList">GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.error"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentMetadataErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataErrorList">GoogleDesignCenterApplicationDeploymentMetadataErrorList</a>

---

##### `RetryAttempts`<sup>Required</sup> <a name="RetryAttempts" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts"></a>

```csharp
public double RetryAttempts { get; }
```

- *Type:* double

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool"></a>

```csharp
public string WorkerPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentMetadata">GoogleDesignCenterApplicationDeploymentMetadata</a>

---


### GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference <a name="GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation">ResetKubernetesServiceAccountCreation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKubernetesServiceAccountCreation` <a name="ResetKubernetesServiceAccountCreation" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation"></a>

```csharp
private void ResetKubernetesServiceAccountCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput">ClusterSelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput">KubernetesServiceAccountCreationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput">KubernetesServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink">ClusterSelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount">KubernetesServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation">KubernetesServiceAccountCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterSelfLinkInput`<sup>Optional</sup> <a name="ClusterSelfLinkInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput"></a>

```csharp
public string ClusterSelfLinkInput { get; }
```

- *Type:* string

---

##### `KubernetesServiceAccountCreationInput`<sup>Optional</sup> <a name="KubernetesServiceAccountCreationInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput"></a>

```csharp
public bool|IResolvable KubernetesServiceAccountCreationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KubernetesServiceAccountInput`<sup>Optional</sup> <a name="KubernetesServiceAccountInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput"></a>

```csharp
public string KubernetesServiceAccountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ClusterSelfLink`<sup>Required</sup> <a name="ClusterSelfLink" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink"></a>

```csharp
public string ClusterSelfLink { get; }
```

- *Type:* string

---

##### `KubernetesServiceAccount`<sup>Required</sup> <a name="KubernetesServiceAccount" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount"></a>

```csharp
public string KubernetesServiceAccount { get; }
```

- *Type:* string

---

##### `KubernetesServiceAccountCreation`<sup>Required</sup> <a name="KubernetesServiceAccountCreation" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation"></a>

```csharp
public bool|IResolvable KubernetesServiceAccountCreation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---


### GoogleDesignCenterApplicationDeploymentTargetOutputReference <a name="GoogleDesignCenterApplicationDeploymentTargetOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationDeploymentTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget">PutGkeDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget">ResetGkeDeploymentTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGkeDeploymentTarget` <a name="PutGkeDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget"></a>

```csharp
private void PutGkeDeploymentTarget(GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---

##### `ResetGkeDeploymentTarget` <a name="ResetGkeDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget"></a>

```csharp
private void ResetGkeDeploymentTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget">GkeDeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput">GkeDeploymentTargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GkeDeploymentTarget`<sup>Required</sup> <a name="GkeDeploymentTarget" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference GkeDeploymentTarget { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a>

---

##### `GkeDeploymentTargetInput`<sup>Optional</sup> <a name="GkeDeploymentTargetInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget GkeDeploymentTargetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget">GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleDesignCenterApplicationDeploymentTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationDeploymentTarget">GoogleDesignCenterApplicationDeploymentTarget</a>

---


### GoogleDesignCenterApplicationRolesApisConfigApisList <a name="GoogleDesignCenterApplicationRolesApisConfigApisList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationRolesApisConfigApisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.get"></a>

```csharp
private GoogleDesignCenterApplicationRolesApisConfigApisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationRolesApisConfigApis[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>[]

---


### GoogleDesignCenterApplicationRolesApisConfigApisOutputReference <a name="GoogleDesignCenterApplicationRolesApisConfigApisOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationRolesApisConfigApisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided">SystemProvided</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput">ApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SystemProvided`<sup>Required</sup> <a name="SystemProvided" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided"></a>

```csharp
public IResolvable SystemProvided { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput"></a>

```csharp
public string ApiInput { get; }
```

- *Type:* string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationRolesApisConfigApis InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>

---


### GoogleDesignCenterApplicationRolesApisConfigList <a name="GoogleDesignCenterApplicationRolesApisConfigList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationRolesApisConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.get"></a>

```csharp
private GoogleDesignCenterApplicationRolesApisConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationRolesApisConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>[]

---


### GoogleDesignCenterApplicationRolesApisConfigOutputReference <a name="GoogleDesignCenterApplicationRolesApisConfigOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationRolesApisConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putApis">PutApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resetApis">ResetApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resetRoles">ResetRoles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApis` <a name="PutApis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putApis"></a>

```csharp
private void PutApis(IResolvable|GoogleDesignCenterApplicationRolesApisConfigApis[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putApis.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>[]

---

##### `PutRoles` <a name="PutRoles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putRoles"></a>

```csharp
private void PutRoles(IResolvable|GoogleDesignCenterApplicationRolesApisConfigRoles[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.putRoles.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>[]

---

##### `ResetApis` <a name="ResetApis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resetApis"></a>

```csharp
private void ResetApis()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.resetRoles"></a>

```csharp
private void ResetRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.apis">Apis</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList">GoogleDesignCenterApplicationRolesApisConfigApisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.roles">Roles</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList">GoogleDesignCenterApplicationRolesApisConfigRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.apisInput">ApisInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput">RolesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Apis`<sup>Required</sup> <a name="Apis" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.apis"></a>

```csharp
public GoogleDesignCenterApplicationRolesApisConfigApisList Apis { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApisList">GoogleDesignCenterApplicationRolesApisConfigApisList</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.roles"></a>

```csharp
public GoogleDesignCenterApplicationRolesApisConfigRolesList Roles { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList">GoogleDesignCenterApplicationRolesApisConfigRolesList</a>

---

##### `ApisInput`<sup>Optional</sup> <a name="ApisInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.apisInput"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationRolesApisConfigApis[] ApisInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigApis">GoogleDesignCenterApplicationRolesApisConfigApis</a>[]

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationRolesApisConfigRoles[] RolesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationRolesApisConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfig">GoogleDesignCenterApplicationRolesApisConfig</a>

---


### GoogleDesignCenterApplicationRolesApisConfigRolesList <a name="GoogleDesignCenterApplicationRolesApisConfigRolesList" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationRolesApisConfigRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.get"></a>

```csharp
private GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationRolesApisConfigRoles[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>[]

---


### GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference <a name="GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided">SystemProvided</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SystemProvided`<sup>Required</sup> <a name="SystemProvided" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided"></a>

```csharp
public IResolvable SystemProvided { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationRolesApisConfigRoles InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationRolesApisConfigRoles">GoogleDesignCenterApplicationRolesApisConfigRoles</a>

---


### GoogleDesignCenterApplicationScopeOutputReference <a name="GoogleDesignCenterApplicationScopeOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScopeOutputReference.property.internalValue"></a>

```csharp
public GoogleDesignCenterApplicationScope InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationScope">GoogleDesignCenterApplicationScope</a>

---


### GoogleDesignCenterApplicationSourceOutputReference <a name="GoogleDesignCenterApplicationSourceOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision">ResetApplicationTemplateRevision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationTemplateRevision` <a name="ResetApplicationTemplateRevision" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision"></a>

```csharp
private void ResetApplicationTemplateRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput">ApplicationTemplateRevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision">ApplicationTemplateRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationTemplateRevisionInput`<sup>Optional</sup> <a name="ApplicationTemplateRevisionInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput"></a>

```csharp
public string ApplicationTemplateRevisionInput { get; }
```

- *Type:* string

---

##### `ApplicationTemplateRevision`<sup>Required</sup> <a name="ApplicationTemplateRevision" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision"></a>

```csharp
public string ApplicationTemplateRevision { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleDesignCenterApplicationSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationSource">GoogleDesignCenterApplicationSource</a>

---


### GoogleDesignCenterApplicationTimeoutsOutputReference <a name="GoogleDesignCenterApplicationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDesignCenterApplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDesignCenterApplicationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDesignCenterApplication.GoogleDesignCenterApplicationTimeouts">GoogleDesignCenterApplicationTimeouts</a>

---



